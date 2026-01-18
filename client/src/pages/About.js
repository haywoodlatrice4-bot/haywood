import React from 'react';
import { Award, Users, Clock, TrendingUp, Heart, Shield, Sparkles, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'We use only premium, eco-friendly products and proven techniques for exceptional results.'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'Every corner, every surface - we treat your property like our own with meticulous care.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'On-time, professional, and consistent. We respect your time and schedule.'
    }
  ];

  const stats = [
    { icon: Users, number: '2,500+', label: 'Happy Customers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: TrendingUp, number: '98%', label: 'Satisfaction Rate' },
    { icon: Clock, number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'James Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: '15+ years of detailing expertise and passion for excellence'
    },
    {
      name: 'Sarah Thompson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Ensuring every service meets our highest standards'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Detailing Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Master craftsman with an eye for perfection'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Dedicated to making every customer experience exceptional'
    }
  ];

  const achievements = [
    'Indianapolis Best Detailing Service 2024',
    'Eco-Friendly Business Certification',
    '5-Star Rating on Google & Yelp',
    'BBB Accredited Business',
    'Certified Professional Detailers',
    'Community Choice Award Winner'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              About Three Space Shine
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
              Indianapolis' Premier Detailing Service - Where Excellence Meets Passion
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
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

      {/* Our Story Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
                Our Story
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
                Three Space Shine was founded in 2010 with a simple mission: to provide Indianapolis with the highest quality detailing services for cars, homes, and offices. What started as a one-person operation has grown into a trusted team of dedicated professionals.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
                Over the past 15+ years, we've served over 2,500 satisfied customers, earning a reputation for excellence, reliability, and attention to detail. We believe that every space deserves to shine, and we're passionate about making that happen.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4b5563' }}>
                Today, we're proud to be Indianapolis' premier detailing service, combining traditional craftsmanship with modern techniques and eco-friendly products to deliver exceptional results every time.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" 
                alt="Our Team"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                backgroundColor: '#1e3a8a',
                color: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>15+</div>
                <div style={{ fontSize: '1.125rem' }}>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              Our Values
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              The principles that guide everything we do
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  textAlign: 'center',
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
                <div style={{
                  backgroundColor: '#eff6ff',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <value.icon style={{ height: '2.5rem', width: '2.5rem', color: '#1e3a8a' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              Meet Our Team
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              The professionals behind your perfect shine
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {team.map((member, index) => (
              <div
                key={index}
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
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '1rem' }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
              Awards & Recognition
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Proud to be recognized for our excellence
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <CheckCircle style={{ height: '2rem', width: '2rem', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Ready to Experience the Difference?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Join our family of satisfied customers and see why we're Indianapolis' #1 choice
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/services"
              style={{
                backgroundColor: 'white',
                color: '#1e3a8a',
                padding: '1.25rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'all 0.3s'
              }}
            >
              Book Your Service
            </a>
            <a
              href="tel:3174463498"
              style={{
                border: '2px solid white',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s'
              }}
            >
              <Phone className="h-5 w-5" />
              <span>(317) 446-3498</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '1rem' }}>
              <Phone style={{ height: '3rem', width: '3rem', color: '#1e3a8a', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                Call Us
              </h3>
              <a href="tel:3174463498" style={{ fontSize: '1.125rem', color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>
                (317) 446-3498
              </a>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '1rem' }}>
              <Mail style={{ height: '3rem', width: '3rem', color: '#1e3a8a', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                Email Us
              </h3>
              <a href="mailto:info@threespacshine.com" style={{ fontSize: '1.125rem', color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>
                info@threespacshine.com
              </a>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '1rem' }}>
              <MapPin style={{ height: '3rem', width: '3rem', color: '#1e3a8a', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                Location
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                Indianapolis, Indiana
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
