import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Building2, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'car-detailing',
      category: 'car',
      name: 'Car Detailing',
      tagline: 'Drive with Pride',
      description: 'Professional interior and exterior car cleaning that makes your vehicle look showroom-new',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop',
      features: [
        'Complete interior vacuuming and shampooing',
        'Exterior wash, wax, and polish',
        'Tire and rim deep cleaning',
        'Dashboard and console detailing',
        'Window cleaning inside and out',
        'Leather conditioning and protection',
        'Odor elimination treatment',
        'Paint protection application'
      ],
      plans: [
        { name: 'One-Time', description: 'Single deep clean', popular: false },
        { name: 'Weekly', description: 'Regular maintenance', popular: true },
        { name: 'Monthly', description: 'Periodic refresh', popular: false }
      ]
    },
    {
      id: 'house-cleaning',
      category: 'house',
      name: 'House Cleaning',
      tagline: 'More Time for Family',
      description: 'Comprehensive residential cleaning services that give you back your free time',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      features: [
        'All rooms deep cleaning',
        'Kitchen and bathroom sanitization',
        'Floor mopping and vacuuming',
        'Dusting all surfaces',
        'Window and mirror cleaning',
        'Eco-friendly cleaning products',
        'Trash removal and organization',
        'Custom cleaning checklist'
      ],
      plans: [
        { name: 'One-Time', description: 'Deep cleaning session', popular: false },
        { name: 'Weekly', description: 'Regular upkeep', popular: true },
        { name: 'Bi-Weekly', description: 'Every 2 weeks', popular: true },
        { name: 'Monthly', description: 'Monthly service', popular: false }
      ]
    },
    {
      id: 'office-cleaning',
      category: 'office',
      name: 'Office Cleaning',
      tagline: 'Impress Your Clients',
      description: 'Commercial cleaning services that create a professional, productive workspace',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      features: [
        'Workstation and desk cleaning',
        'Conference room sanitization',
        'Restroom deep cleaning',
        'Break room and kitchen service',
        'Floor care and maintenance',
        'Trash and recycling removal',
        'After-hours service available',
        'Commercial-grade equipment'
      ],
      plans: [
        { name: 'Daily', description: 'Every business day', popular: true },
        { name: 'Weekly', description: 'Once per week', popular: false },
        { name: 'Bi-Weekly', description: 'Every 2 weeks', popular: false },
        { name: 'Monthly', description: 'Monthly service', popular: false }
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'car': return Car;
      case 'house': return HomeIcon;
      case 'office': return Building2;
      default: return Sparkles;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        paddingTop: '4rem',
        paddingBottom: '4rem'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Our Premium Services
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            Professional detailing for cars, homes, and offices in Indianapolis
          </p>
          <Link
            to="/get-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'all 0.3s'
            }}
          >
            Get Instant Free Quote
            <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Services', icon: Sparkles },
              { id: 'car', label: 'Car Detailing', icon: Car },
              { id: 'house', label: 'House Cleaning', icon: HomeIcon },
              { id: 'office', label: 'Office Cleaning', icon: Building2 }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  backgroundColor: selectedCategory === cat.id ? '#1e3a8a' : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#374151',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <cat.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {filteredServices.map(service => {
              const Icon = getCategoryIcon(service.category);
              return (
                <div
                  key={service.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s'
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
                  {/* Service Image */}
                  <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                    <img 
                      src={service.image}
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'white',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                      <Icon style={{ width: '2rem', height: '2rem', color: '#1e3a8a' }} />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                      {service.name}
                    </h3>
                    <p style={{ fontSize: '1.125rem', color: '#10b981', fontWeight: '600', marginBottom: '1rem' }}>
                      {service.tagline}
                    </p>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#374151' }}>
                        What's Included:
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                            <CheckCircle style={{ width: '1rem', height: '1rem', color: '#10b981', flexShrink: 0, marginTop: '0.25rem' }} />
                            <span style={{ fontSize: '0.875rem', color: '#374151' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {service.features.length > 6 && (
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                          + {service.features.length - 6} more features
                        </p>
                      )}
                    </div>

                    {/* Available Plans */}
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.75rem', color: '#374151' }}>
                        Available Plans:
                      </h4>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {service.plans.map((plan, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: '0.5rem 0.75rem',
                              backgroundColor: plan.popular ? '#dbeafe' : 'white',
                              border: `2px solid ${plan.popular ? '#3b82f6' : '#e5e7eb'}`,
                              borderRadius: '0.375rem',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              color: plan.popular ? '#1e40af' : '#374151'
                            }}
                          >
                            {plan.name}
                            {plan.popular && <span style={{ marginLeft: '0.25rem', fontSize: '0.75rem' }}>⭐</span>}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/get-quote"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: '#10b981',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        fontSize: '1.125rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                      }}
                    >
                      Get Instant Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section style={{ paddingTop: '3rem', paddingBottom: '5rem', backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              Our Professional Team
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Trained, certified, and ready to serve you
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              maxWidth: '400px',
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: '#f9fafb',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=400&h=400&fit=crop"
                alt="Three Space Shine Team Member"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1.5rem auto',
                  border: '4px solid #1e3a8a'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                Our Certified Professionals
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                Every team member is background-checked, trained, and certified in professional cleaning techniques
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <CheckCircle style={{ width: '2rem', height: '2rem', color: '#10b981', margin: '0 auto 0.5rem auto' }} />
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Certified</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <CheckCircle style={{ width: '2rem', height: '2rem', color: '#10b981', margin: '0 auto 0.5rem auto' }} />
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Insured</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <CheckCircle style={{ width: '2rem', height: '2rem', color: '#10b981', margin: '0 auto 0.5rem auto' }} />
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Trusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Get your free instant quote in less than 2 minutes
          </p>
          <Link
            to="/get-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1.25rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'all 0.3s'
            }}
          >
            Get Free Quote Now
            <ArrowRight style={{ width: '1.5rem', height: '1.5rem' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
