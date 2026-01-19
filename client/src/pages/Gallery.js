import React, { useState } from 'react';
import { Car, Home as HomeIcon, Building2, Sparkles } from 'lucide-react';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      category: 'car',
      title: 'Luxury Car Detailing',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop',
      description: 'Complete exterior and interior detailing'
    },
    {
      id: 2,
      category: 'car',
      title: 'Interior Deep Clean',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop',
      description: 'Professional interior restoration'
    },
    {
      id: 3,
      category: 'car',
      title: 'Paint Correction',
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop',
      description: 'Mirror-like finish restoration'
    },
    {
      id: 4,
      category: 'house',
      title: 'Living Room Detailing',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      description: 'Complete home cleaning service'
    },
    {
      id: 5,
      category: 'house',
      title: 'Kitchen Deep Clean',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
      description: 'Spotless kitchen transformation'
    },
    {
      id: 6,
      category: 'house',
      title: 'Bathroom Detailing',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      description: 'Pristine bathroom cleaning'
    },
    {
      id: 7,
      category: 'office',
      title: 'Corporate Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Professional workspace cleaning'
    },
    {
      id: 8,
      category: 'office',
      title: 'Conference Room',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      description: 'Meeting space detailing'
    },
    {
      id: 9,
      category: 'office',
      title: 'Reception Area',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'First impression perfection'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Work', icon: Sparkles },
    { id: 'car', name: 'Car Detailing', icon: Car },
    { id: 'house', name: 'House Cleaning', icon: HomeIcon },
    { id: 'office', name: 'Office Cleaning', icon: Building2 },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sparkles style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem auto' }} />
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Our Work Gallery
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            See the amazing transformations we've delivered for our satisfied customers
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '3rem 0', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid',
                  borderColor: activeCategory === category.id ? '#1e3a8a' : '#e5e7eb',
                  backgroundColor: activeCategory === category.id ? '#1e3a8a' : 'white',
                  color: activeCategory === category.id ? 'white' : '#374151',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.borderColor = '#1e3a8a';
                    e.target.style.color = '#1e3a8a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                <category.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img 
                    src={image.image} 
                    alt={image.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {image.category}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
                    {image.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            Book your detailing service today and experience the Three Space Shine difference
          </p>
          <a
            href="/get-quote"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#1e3a8a',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
