import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Bookmark, 
  Heart,
  MessageSquare,
  Tag,
  ChevronRight,
  Zap
} from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the post
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
    
    setIsLoading(false);
  }, [postId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-orbitron font-bold text-text-primary mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-transparent"></div>
        
        <div className="absolute top-8 left-8">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-text-secondary hover:text-neon-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-dark-tertiary text-neon-green rounded-full text-sm font-medium border border-neon-green/30">
                {post.category}
              </span>
              <span className="text-text-secondary text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="text-text-secondary text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-text-primary mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                <User className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-text-primary font-medium">{post.author}</p>
                <p className="text-text-secondary text-sm">{post.authorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-dark-secondary rounded-xl p-8 border border-dark shadow-xl">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'paragraph' && (
                  <p className="text-text-secondary mb-4">{section.content}</p>
                )}
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-orbitron font-bold text-text-primary mb-4">{section.content}</h2>
                )}
                {section.type === 'subheading' && (
                  <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3">{section.content}</h3>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-2 mb-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary">
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.type === 'code' && (
                  <pre className="bg-dark-tertiary p-4 rounded-lg overflow-x-auto mb-4 border border-dark">
                    <code className="text-neon-cyan">{section.content}</code>
                  </pre>
                )}
                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-neon-cyan pl-4 italic text-text-secondary mb-4">
                    {section.content}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
          
          {/* Tags */}
          <div className="border-t border-dark pt-6 mt-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <Tag className="w-5 h-5 text-text-secondary" />
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-dark-tertiary text-text-secondary rounded-full text-sm border border-dark">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Social Sharing */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="p-2 bg-dark-tertiary rounded-full text-text-secondary hover:text-neon-pink border border-dark hover:border-neon-pink/50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 bg-dark-tertiary rounded-full text-text-secondary hover:text-neon-green border border-dark hover:border-neon-green/50 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 bg-dark-tertiary rounded-full text-text-secondary hover:text-neon-cyan border border-dark hover:border-neon-cyan/50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <MessageSquare className="w-5 h-5" />
                <span>{post.comments} comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-orbitron font-bold text-text-primary">Related Articles</h2>
          <a href="/blog" className="text-neon-cyan hover:text-neon-cyan/80 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((relatedPost, index) => (
            <motion.div
              key={relatedPost.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-secondary rounded-xl overflow-hidden shadow-lg border border-dark hover:border-neon-green/30 transition-all cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/blog/${relatedPost.id}`);
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={relatedPost.image} 
                  alt={relatedPost.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-dark-tertiary text-neon-cyan rounded-full text-xs font-medium border border-neon-cyan/30">
                    {relatedPost.category}
                  </span>
                  <span className="text-text-secondary text-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {relatedPost.date}
                  </span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-text-primary mb-3 hover:text-neon-green transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-xs flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {relatedPost.author}
                  </span>
                  <span className="text-text-secondary text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {relatedPost.readTime} min read
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark-secondary border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-quote')}
                className="btn-neon px-8 py-4 rounded-full font-orbitron font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-dark-primary" />
                Get Your Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;