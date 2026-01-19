import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Building2, Star, CheckCircle, ArrowRight, Phone, Users, Award, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserPlus, MessageCircle } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [beforeAfterSlide, setBeforeAfterSlide] = useState(0);

  const services = [
    {
      icon: Car,
      title: 'Car Detailing',
      description: 'Drive with pride in a spotless vehicle',
      benefits: ['Interior deep cleaning', 'Exterior polish & wax', 'Stain & odor removal', 'Weekly, monthly, or one-time plans'],
      link: '/get-quote',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop'
    },
    {
      icon: HomeIcon,
      title: 'House Cleaning',
      description: 'Enjoy more free time with your family',
      benefits: ['Complete home cleaning', 'Eco-friendly products', 'Flexible scheduling', 'Trusted & insured professionals'],
      link: '/get-quote',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop'
    },
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Impress clients with a pristine workspace',
      benefits: ['After-hours service', 'Commercial-grade cleaning', 'Customized plans', 'Boost employee productivity'],
      link: '/get-quote',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Car Detailing - Elite Package',
      rating: 5,
      review: 'Absolutely amazing service! My car looks brand new. The team was professional, punctual, and the attention to detail was incredible. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      location: 'Indianapolis, IN'
    },
    {
      name: 'Michael Davis',
      service: 'House Detailing - Premium Package',
      rating: 5,
      review: 'Three Space Shine transformed my home! Every corner was spotless. They used eco-friendly products and were very respectful of our space. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      location: 'Carmel, IN'
    },
    {
      name: 'Jennifer Martinez',
      service: 'Office Detailing - Elite Package',
      rating: 5,
      review: 'Our office has never looked better! The team worked efficiently after hours and left everything pristine. Our clients have noticed the difference!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      location: 'Fishers, IN'
    },
    {
      name: 'Robert Thompson',
      service: 'Car Detailing - Premium Package',
      rating: 5,
      review: 'Best detailing service in Indianapolis! They removed stains I thought were permanent. The interior smells fresh and the exterior shines like a mirror!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      location: 'Noblesville, IN'
    }
  ];

  const stats = [
    { icon: Users, number: '2,500+', label: 'Happy Customers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Customer Support' },
    { icon: TrendingUp, number: '98%', label: 'Satisfaction Rate' }
  ];

  const beforeAfter = [
    {
      before: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop',
      title: 'Car Interior Transformation',
      description: 'Complete interior detailing with stain removal'
    },
    {
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop',
      title: 'Living Room Deep Clean',
      description: 'Professional home detailing service'
    },
    {
      before: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      title: 'Office Space Detailing',
      description: 'Commercial workspace transformation'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setBeforeAfterSlide((prev) => (prev + 1) % beforeAfter.length);
  };

  const prevSlide = () => {
    setBeforeAfterSlide((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Booking Form */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Left Side - Content */}
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Premium Detailing<br/>Services in Indianapolis
              </h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                Car • House • Office - We Make Everything Shine
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stat.number}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="tel:3174463498" style={{
                  backgroundColor: 'white',
                  color: '#1e3a8a',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s'
                }}>
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                <Link to="/services" style={{
                  border: '2px solid white',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s'
                }}>
                  <span>View Services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Get Quote CTA */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#1e3a8a', fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Get Your Free Quote
              </h3>
              <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Tell us about your needs and we'll provide a custom quote within 24 hours. No obligation, completely free!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link to="/get-quote" style={{
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s'
                }}>
                  <Calendar className="h-6 w-6" />
                  <span>Request Free Quote</span>
                </Link>
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '0.75rem',
                  border: '2px solid #e5e7eb'
                }}>
                  <p style={{ color: '#374151', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                    ✓ Choose from weekly, monthly, or one-time plans
                  </p>
                  <p style={{ color: '#374151', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                    ✓ Custom pricing based on your needs
                  </p>
                  <p style={{ color: '#374151', fontSize: '0.875rem', fontWeight: '600' }}>
                    ✓ Trusted by 2,500+ satisfied customers
                  </p>
                </div>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', textAlign: 'center', marginTop: '1.5rem' }}>
                Or call us at <a href="tel:3174463498" style={{ color: '#1e3a8a', fontWeight: 'bold', textDecoration: 'none' }}>(317) 446-3498</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        background: 'linear-gradient(to right, #2563eb, #1e40af)',
        color: 'white'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon style={{ height: '3rem', width: '3rem', margin: '0 auto 1rem auto' }} />
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ color: '#bfdbfe', fontSize: '1.125rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              See The Transformation
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Real results from real customers
            </p>
          </div>
          
          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ position: 'relative' }}>
                  <img src={beforeAfter[beforeAfterSlide].before} alt="Before" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>
                    BEFORE
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <img src={beforeAfter[beforeAfterSlide].after} alt="After" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>
                    AFTER
                  </div>
                </div>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                  {beforeAfter[beforeAfterSlide].title}
                </h3>
                <p style={{ color: '#6b7280' }}>{beforeAfter[beforeAfterSlide].description}</p>
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft className="h-6 w-6" style={{ color: '#1e3a8a' }} />
            </button>
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight className="h-6 w-6" style={{ color: '#1e3a8a' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              Our Premium Services
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Professional detailing for every need
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <service.icon style={{ height: '2rem', width: '2rem', color: '#1e3a8a' }} />
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111827' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                    {service.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <CheckCircle style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
                        <span style={{ color: '#374151', fontWeight: '500' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      backgroundColor: '#10b981',
                      color: 'white',
                      padding: '0.875rem',
                      borderRadius: '0.5rem',
                      fontWeight: 'bold',
                      fontSize: '1.125rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              What Our Customers Say
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
              Don't just take our word for it
            </p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: 'white',
              color: '#111827',
              padding: '3rem',
              borderRadius: '1rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              minHeight: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginRight: '1.5rem' }}
                />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {testimonials[currentTestimonial].location}
                  </p>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', fontStyle: 'italic', color: '#374151', marginBottom: '1rem' }}>
                "{testimonials[currentTestimonial].review}"
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600' }}>
                {testimonials[currentTestimonial].service}
              </p>
            </div>
            
            <button
              onClick={prevTestimonial}
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft className="h-6 w-6" style={{ color: '#1e3a8a' }} />
            </button>
            <button
              onClick={nextTestimonial}
              style={{
                position: 'absolute',
                right: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <ChevronRight className="h-6 w-6" style={{ color: '#1e3a8a' }} />
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: index === currentTestimonial ? 'white' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
            Ready to Experience the Shine?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2.5rem' }}>
            Join 2,500+ satisfied customers and book your detailing service today
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/register" style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              padding: '1.25rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 25px rgba(30,58,138,0.3)',
              transition: 'all 0.3s'
            }}>
              <UserPlus className="h-5 w-5" />
              <span>Create Account</span>
            </Link>
            <a href="tel:3174463498" style={{
              border: '2px solid #1e3a8a',
              color: '#1e3a8a',
              padding: '1.25rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1.125rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}>
              <Phone className="h-5 w-5" />
              <span>(317) 446-3498</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <a
        href="tel:3174463498"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#1e3a8a',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
          textDecoration: 'none'
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Three Space Shine</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
                Premium detailing services for your car, house, and office in Indianapolis, Indiana.
              </p>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {renderStars(5)}
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                Rated 5/5 by 2,500+ customers
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h3>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>Indianapolis, Indiana</p>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
                <a href="tel:3174463498" style={{ color: '#9ca3af', textDecoration: 'none' }}>Phone: (317) 446-3498</a>
              </p>
              <p style={{ color: '#9ca3af' }}>
                <a href="mailto:info@threespacshine.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>Email: info@threespacshine.com</a>
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hours</h3>
              <p style={{ color: '#9ca3af' }}>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p style={{ color: '#9ca3af' }}>Saturday: 9:00 AM - 4:00 PM</p>
              <p style={{ color: '#9ca3af' }}>Sunday: Closed</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af' }}>
            <p>&copy; 2026 Three Space Shine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
