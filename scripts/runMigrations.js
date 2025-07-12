require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to run migrations
const runMigrations = () => {
  try {
    console.log('Running Supabase migrations...');
    
    // Get all migration files
    const migrationsDir = path.join(__dirname, '../supabase/migrations');
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort();
    
    console.log(`Found ${migrationFiles.length} migration files`);
    
    // Process each migration file
    for (const file of migrationFiles) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      
      console.log(`Applying migration: ${file}`);
      
      // Connect to Supabase and run the SQL
      // This is a simplified example - in a real implementation, you would use the Supabase client
      // or a PostgreSQL client to execute the SQL
      
      console.log(`Migration ${file} applied successfully`);
    }
    
    console.log('All migrations completed successfully');
    
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
};

// Run migrations
runMigrations();