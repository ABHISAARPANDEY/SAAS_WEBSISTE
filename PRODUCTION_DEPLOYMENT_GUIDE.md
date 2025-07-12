# Production File Upload System - Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying the production-grade file upload system with all security features, performance optimizations, and monitoring capabilities.

## System Requirements

### Minimum Requirements
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 50GB SSD
- **Network**: 100 Mbps
- **OS**: Ubuntu 20.04 LTS or CentOS 8

### Recommended Requirements
- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 100GB+ SSD
- **Network**: 1 Gbps
- **OS**: Ubuntu 22.04 LTS

## Pre-Deployment Setup

### 1. System Dependencies

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx for reverse proxy
sudo apt install nginx -y

# Install ClamAV for virus scanning
sudo apt install clamav clamav-daemon -y
sudo freshclam
sudo systemctl enable clamav-daemon
sudo systemctl start clamav-daemon
```

### 2. Database Setup (PostgreSQL)

```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Create database and user
sudo -u postgres psql
CREATE DATABASE fileupload;
CREATE USER fileupload_user WITH ENCRYPTED PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE fileupload TO fileupload_user;
\q
```

### 3. SSL Certificate Setup

```bash
# Install Certbot for Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Application Deployment

### 1. Clone and Setup Application

```bash
# Create application directory
sudo mkdir -p /var/www/fileupload
sudo chown $USER:$USER /var/www/fileupload

# Clone repository
cd /var/www/fileupload
git clone https://github.com/yourusername/file-upload-system.git .

# Install dependencies
npm install --production

# Create uploads directory with proper permissions
mkdir -p uploads
chmod 755 uploads
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

**Production Environment Variables:**

```env
NODE_ENV=production
PORT=3001

# Upload Configuration
UPLOAD_DIR=/var/www/fileupload/uploads
MAX_FILE_SIZE=52428800
MAX_FILES=10

# Security Configuration
JWT_SECRET=your-super-secure-jwt-secret-256-bits-minimum
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com

# Database Configuration
DATABASE_URL=postgresql://fileupload_user:secure_password@localhost:5432/fileupload

# Virus Scanning
ENABLE_VIRUS_SCANNING=true
CLAMAV_HOST=localhost
CLAMAV_PORT=3310

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_MAX_AUTHENTICATED=500

# Logging
LOG_LEVEL=info
LOG_FILE=/var/log/fileupload/app.log

# Admin Configuration
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_IPS=your.admin.ip.address
```

### 3. Database Migration

```bash
# Run database migrations
npm run migrate

# Seed initial data (if applicable)
npm run seed
```

### 4. PM2 Process Management

Create PM2 ecosystem file:

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'fileupload-api',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/fileupload/pm2-error.log',
    out_file: '/var/log/fileupload/pm2-out.log',
    log_file: '/var/log/fileupload/pm2-combined.log',
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};
```

Start the application:

```bash
# Create log directory
sudo mkdir -p /var/log/fileupload
sudo chown $USER:$USER /var/log/fileupload

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
```

## Nginx Configuration

### 1. Create Nginx Configuration

```nginx
# /etc/nginx/sites-available/fileupload
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Upload Configuration
    client_max_body_size 100M;
    client_body_timeout 60s;
    client_header_timeout 60s;

    # Rate Limiting
    limit_req_zone $binary_remote_addr zone=upload:10m rate=10r/m;
    limit_req_zone $binary_remote_addr zone=api:10m rate=100r/m;

    # API Proxy
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Upload Endpoint with Stricter Limits
    location /api/upload {
        limit_req zone=upload burst=5 nodelay;
        
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 600s;
        proxy_connect_timeout 75s;
        proxy_send_timeout 600s;
    }

    # Static Files (if serving uploads directly)
    location /uploads/ {
        alias /var/www/fileupload/uploads/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Content-Type-Options nosniff;
        
        # Prevent execution of uploaded files
        location ~* \.(php|pl|py|jsp|asp|sh|cgi)$ {
            deny all;
        }
    }

    # Frontend Application
    location / {
        root /var/www/fileupload/frontend/dist;
        try_files $uri $uri/ /index.html;
        expires 1h;
        add_header Cache-Control "public";
    }
}
```

### 2. Enable Nginx Configuration

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/fileupload /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## Security Hardening

### 1. Firewall Configuration

```bash
# Install UFW
sudo apt install ufw -y

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH
sudo ufw allow ssh

# Allow HTTP/HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable
```

### 2. Fail2Ban Setup

```bash
# Install Fail2Ban
sudo apt install fail2ban -y

# Create custom configuration
sudo nano /etc/fail2ban/jail.local
```

```ini
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[nginx-http-auth]
enabled = true

[nginx-limit-req]
enabled = true
filter = nginx-limit-req
action = iptables-multiport[name=ReqLimit, port="http,https", protocol=tcp]
logpath = /var/log/nginx/error.log
findtime = 600
bantime = 7200
maxretry = 10
```

### 3. System Monitoring

```bash
# Install monitoring tools
sudo apt install htop iotop nethogs -y

# Setup log rotation
sudo nano /etc/logrotate.d/fileupload
```

```
/var/log/fileupload/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 $USER $USER
    postrotate
        pm2 reload fileupload-api
    endscript
}
```

## Monitoring and Logging

### 1. Application Monitoring

```bash
# Install monitoring dependencies
npm install --save express-prometheus-middleware prom-client

# Setup Prometheus metrics endpoint
# Add to your app.js:
```

```javascript
const promMid = require('express-prometheus-middleware');

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5, 2, 3, 5, 10],
}));
```

### 2. Log Management

```bash
# Install log management tools
sudo apt install rsyslog logrotate -y

# Configure centralized logging
sudo nano /etc/rsyslog.d/50-fileupload.conf
```

```
# File upload application logs
if $programname == 'fileupload' then /var/log/fileupload/app.log
& stop
```

### 3. Health Checks

Create health check script:

```bash
#!/bin/bash
# /usr/local/bin/health-check.sh

# Check if application is responding
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/health)

if [ $response -eq 200 ]; then
    echo "Application is healthy"
    exit 0
else
    echo "Application is unhealthy (HTTP $response)"
    # Restart application
    pm2 restart fileupload-api
    exit 1
fi
```

```bash
# Make executable
sudo chmod +x /usr/local/bin/health-check.sh

# Add to crontab
crontab -e
# Add: */5 * * * * /usr/local/bin/health-check.sh
```

## Backup Strategy

### 1. Database Backup

```bash
#!/bin/bash
# /usr/local/bin/backup-db.sh

BACKUP_DIR="/var/backups/fileupload"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="fileupload"

mkdir -p $BACKUP_DIR

# Create database backup
pg_dump $DB_NAME | gzip > $BACKUP_DIR/db_backup_$DATE.sql.gz

# Keep only last 30 days of backups
find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +30 -delete

echo "Database backup completed: db_backup_$DATE.sql.gz"
```

### 2. File Backup

```bash
#!/bin/bash
# /usr/local/bin/backup-files.sh

BACKUP_DIR="/var/backups/fileupload"
UPLOAD_DIR="/var/www/fileupload/uploads"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Create incremental backup of uploads
rsync -av --link-dest=$BACKUP_DIR/latest $UPLOAD_DIR/ $BACKUP_DIR/files_$DATE/
rm -f $BACKUP_DIR/latest
ln -s files_$DATE $BACKUP_DIR/latest

# Keep only last 7 days of file backups
find $BACKUP_DIR -name "files_*" -mtime +7 -exec rm -rf {} \;

echo "File backup completed: files_$DATE"
```

### 3. Automated Backup Schedule

```bash
# Add to crontab
crontab -e

# Database backup every 6 hours
0 */6 * * * /usr/local/bin/backup-db.sh

# File backup daily at 2 AM
0 2 * * * /usr/local/bin/backup-files.sh
```

## Performance Optimization

### 1. Node.js Optimization

```javascript
// Add to app.js
const compression = require('compression');

// Enable gzip compression
app.use(compression());

// Optimize garbage collection
if (process.env.NODE_ENV === 'production') {
  process.env.NODE_OPTIONS = '--max-old-space-size=1024 --optimize-for-size';
}
```

### 2. Database Optimization

```sql
-- Add indexes for better performance
CREATE INDEX idx_files_user_id ON files(user_id);
CREATE INDEX idx_files_created_at ON files(created_at);
CREATE INDEX idx_files_status ON files(status);

-- Optimize PostgreSQL settings
-- Add to postgresql.conf:
shared_buffers = 256MB
effective_cache_size = 1GB
maintenance_work_mem = 64MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 1.1
effective_io_concurrency = 200
```

## Testing Deployment

### 1. Functional Tests

```bash
# Test health endpoint
curl -f http://localhost:3001/health

# Test upload endpoint (requires authentication)
curl -X POST \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "file=@test-file.pdf" \
  http://localhost:3001/api/upload

# Test rate limiting
for i in {1..110}; do
  curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3001/health
done
```

### 2. Load Testing

```bash
# Install Apache Bench
sudo apt install apache2-utils -y

# Test concurrent uploads
ab -n 100 -c 10 -T 'multipart/form-data' \
   -H "Authorization: Bearer YOUR_JWT_TOKEN" \
   http://localhost:3001/api/upload
```

### 3. Security Testing

```bash
# Test file type validation
curl -X POST \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "file=@malicious.exe" \
  http://localhost:3001/api/upload

# Test file size limits
dd if=/dev/zero of=large-file.bin bs=1M count=100
curl -X POST \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "file=@large-file.bin" \
  http://localhost:3001/api/upload
```

## Maintenance Procedures

### 1. Regular Updates

```bash
#!/bin/bash
# /usr/local/bin/update-system.sh

# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Node.js dependencies
cd /var/www/fileupload
npm audit fix
npm update

# Restart application
pm2 restart fileupload-api

# Update virus definitions
sudo freshclam

echo "System update completed"
```

### 2. Log Cleanup

```bash
#!/bin/bash
# /usr/local/bin/cleanup-logs.sh

# Clean old PM2 logs
pm2 flush

# Clean old application logs
find /var/log/fileupload -name "*.log" -mtime +30 -delete

# Clean old Nginx logs
find /var/log/nginx -name "*.log.*.gz" -mtime +90 -delete

echo "Log cleanup completed"
```

### 3. Storage Cleanup

```bash
#!/bin/bash
# /usr/local/bin/cleanup-storage.sh

UPLOAD_DIR="/var/www/fileupload/uploads"
RETENTION_DAYS=365

# Remove files older than retention period
find $UPLOAD_DIR -type f -mtime +$RETENTION_DAYS -delete

# Remove empty directories
find $UPLOAD_DIR -type d -empty -delete

echo "Storage cleanup completed"
```

## Troubleshooting

### Common Issues

1. **High Memory Usage**
   ```bash
   # Check memory usage
   free -h
   pm2 monit
   
   # Restart application if needed
   pm2 restart fileupload-api
   ```

2. **Upload Failures**
   ```bash
   # Check logs
   tail -f /var/log/fileupload/app.log
   tail -f /var/log/nginx/error.log
   
   # Check disk space
   df -h
   ```

3. **Database Connection Issues**
   ```bash
   # Check PostgreSQL status
   sudo systemctl status postgresql
   
   # Check connections
   sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"
   ```

4. **Virus Scanner Issues**
   ```bash
   # Check ClamAV status
   sudo systemctl status clamav-daemon
   
   # Update virus definitions
   sudo freshclam
   
   # Restart ClamAV
   sudo systemctl restart clamav-daemon
   ```

### Emergency Procedures

1. **Application Down**
   ```bash
   # Check PM2 status
   pm2 status
   
   # Restart application
   pm2 restart fileupload-api
   
   # If still down, check logs and restart server
   sudo reboot
   ```

2. **Database Issues**
   ```bash
   # Restore from backup
   gunzip -c /var/backups/fileupload/db_backup_YYYYMMDD_HHMMSS.sql.gz | psql fileupload
   ```

3. **Storage Full**
   ```bash
   # Emergency cleanup
   /usr/local/bin/cleanup-storage.sh
   
   # Move old files to external storage
   rsync -av /var/www/fileupload/uploads/ /external/storage/
   ```

## Security Checklist

- [ ] SSL/TLS certificates installed and configured
- [ ] Firewall configured with minimal open ports
- [ ] Fail2Ban configured for intrusion prevention
- [ ] Regular security updates scheduled
- [ ] Virus scanning enabled and updated
- [ ] Rate limiting configured
- [ ] File type validation implemented
- [ ] Input sanitization enabled
- [ ] Secure file permissions set
- [ ] Database access restricted
- [ ] Backup strategy implemented
- [ ] Monitoring and alerting configured
- [ ] Log rotation configured
- [ ] Emergency procedures documented

## Support and Maintenance

For ongoing support and maintenance:

1. Monitor application logs daily
2. Review security alerts weekly
3. Update dependencies monthly
4. Test backup restoration quarterly
5. Review and update security policies annually

This deployment guide ensures a production-ready, secure, and scalable file upload system suitable for enterprise environments.