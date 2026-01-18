import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '0.5rem 0', fontSize: '0.875rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="tel:3174463498" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone style={{ width: '1rem', height: '1rem' }} />
              <span>(317) 446-3498</span>
            </a>
            <a href="mailto:info@threespacshine.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail style={{ width: '1rem', height: '1rem' }} />
              <span>info@threespacshine.com</span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>
                    Admin
                  </Link>
                )}
                <Link to="/my-bookings" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>
                  My Bookings
                </Link>
                <button
                  onClick={handleLogout}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.875rem' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600' }}>
                  Login
                </Link>
                <Link 
                  to="/register" 
                  style={{ 
                    backgroundColor: '#10b981', 
                    color: 'white', 
                    padding: '0.375rem 0.875rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
                    fontSize: '0.875rem', 
                    fontWeight: '600',
                    transition: 'all 0.3s'
                  }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5rem' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1'
              }}>
                THREE SPACE
              </div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1',
                marginTop: '-0.25rem'
              }}>
                SHINE
              </div>
            </div>
            <div style={{
              width: '4px',
              height: '3.5rem',
              background: 'linear-gradient(to bottom, #1e3a8a, #10b981)',
              marginLeft: '1rem',
              borderRadius: '2px'
            }}></div>
          </Link>

          {/* Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link
              to="/services"
              style={{
                color: '#374151',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1e3a8a'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              style={{
                color: '#374151',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1e3a8a'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              style={{
                color: '#374151',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1e3a8a'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              About
            </Link>
            <Link
              to="/get-quote"
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#059669';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#10b981';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
