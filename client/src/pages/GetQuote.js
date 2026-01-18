import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Home, Building2, Car, Clock, MapPin, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const GetQuote = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    planType: '',
    frequency: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '',
    propertySize: '',
    additionalInfo: ''
  });

  const serviceTypes = [
    { id: 'car', name: 'Car Detailing', icon: Car, description: 'Professional interior & exterior car cleaning' },
    { id: 'house', name: 'House Cleaning', icon: Home, description: 'Residential cleaning services' },
    { id: 'office', name: 'Office Cleaning', icon: Building2, description: 'Commercial workspace cleaning' }
  ];

  const planTypes = [
    { id: 'one-time', name: 'One-Time Service', description: 'Single deep cleaning session', popular: false },
    { id: 'weekly', name: 'Weekly Plan', description: 'Regular weekly cleaning', popular: true },
    { id: 'bi-weekly', name: 'Bi-Weekly Plan', description: 'Every two weeks', popular: true },
    { id: 'monthly', name: 'Monthly Plan', description: 'Once per month service', popular: false }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateQuote = () => {
    if (!formData.serviceType || !formData.planType) return null;

    const basePrices = {
      car: { 'one-time': 150, weekly: 120, 'bi-weekly': 130, monthly: 140 },
      house: { 'one-time': 250, weekly: 180, 'bi-weekly': 200, monthly: 220 },
      office: { 'one-time': 350, weekly: 280, 'bi-weekly': 300, monthly: 320 }
    };

    const basePrice = basePrices[formData.serviceType]?.[formData.planType] || 0;
    
    // Add property size multiplier
    let sizeMultiplier = 1;
    if (formData.propertySize) {
      const size = parseInt(formData.propertySize);
      if (size > 3000 || size > 5) sizeMultiplier = 1.5;
      else if (size > 2000 || size > 3) sizeMultiplier = 1.3;
      else if (size > 1000 || size > 2) sizeMultiplier = 1.1;
    }

    const totalPrice = Math.round(basePrice * sizeMultiplier);
    const discount = formData.planType === 'weekly' ? 0.15 : formData.planType === 'bi-weekly' ? 0.10 : 0;
    const finalPrice = Math.round(totalPrice * (1 - discount));

    return { basePrice: totalPrice, discount, finalPrice };
  };

  const quote = calculateQuote();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData, 'Quote:', quote);
    alert(`Your Quote: $${quote.finalPrice}\n\nThank you! We'll contact you to schedule your service.`);
    navigate('/');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Get Your Free Quote
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Tell us about your needs and we'll provide a custom quote within 24 hours
          </p>
        </div>

        {/* Progress Steps */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', gap: '1rem' }}>
          {[1, 2, 3].map((num) => (
            <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                backgroundColor: step >= num ? '#1e3a8a' : '#e5e7eb',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}>
                {step > num ? <CheckCircle style={{ width: '1.5rem', height: '1.5rem' }} /> : num}
              </div>
              {num < 3 && (
                <div style={{
                  width: '3rem',
                  height: '2px',
                  backgroundColor: step > num ? '#1e3a8a' : '#e5e7eb',
                  transition: 'all 0.3s'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '2.5rem'
        }}>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
                  What service do you need?
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  {serviceTypes.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setFormData({ ...formData, serviceType: service.id })}
                      style={{
                        padding: '2rem',
                        border: `3px solid ${formData.serviceType === service.id ? '#1e3a8a' : '#e5e7eb'}`,
                        borderRadius: '1rem',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.3s',
                        backgroundColor: formData.serviceType === service.id ? '#eff6ff' : 'white'
                      }}
                    >
                      <service.icon style={{
                        width: '3rem',
                        height: '3rem',
                        margin: '0 auto 1rem auto',
                        color: formData.serviceType === service.id ? '#1e3a8a' : '#6b7280'
                      }} />
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                        {service.name}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827', marginTop: '2rem' }}>
                  Choose your plan
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {planTypes.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setFormData({ ...formData, planType: plan.id })}
                      style={{
                        padding: '1.5rem',
                        border: `2px solid ${formData.planType === plan.id ? '#1e3a8a' : '#e5e7eb'}`,
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        backgroundColor: formData.planType === plan.id ? '#eff6ff' : 'white',
                        position: 'relative'
                      }}
                    >
                      {plan.popular && (
                        <div style={{
                          position: 'absolute',
                          top: '-0.75rem',
                          right: '1rem',
                          backgroundColor: '#10b981',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
                        }}>
                          POPULAR
                        </div>
                      )}
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
                        {plan.name}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        {plan.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
                  Your contact information
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      <User className="inline h-4 w-4 mr-1" /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        <Mail className="inline h-4 w-4 mr-1" /> Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        <Phone className="inline h-4 w-4 mr-1" /> Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(317) 555-0123"
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Property Details */}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
                  Property details
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      <MapPin className="inline h-4 w-4 mr-1" /> Service Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        ZIP *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="46201"
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          border: '2px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      Property Size (sq ft) or Number of Rooms
                    </label>
                    <input
                      type="text"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleChange}
                      placeholder="e.g., 2000 sq ft or 3 bedrooms"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      <MessageSquare className="inline h-4 w-4 mr-1" /> Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us more about your cleaning needs, special requests, or any concerns..."
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Instant Quote Display */}
            {quote && (
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: '#ecfdf5',
                border: '2px solid #10b981',
                borderRadius: '0.75rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#065f46', marginBottom: '1rem' }}>
                  ✨ Your Instant Quote
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: '#047857', marginBottom: '0.25rem' }}>
                      Base Price: ${quote.basePrice}
                    </p>
                    {quote.discount > 0 && (
                      <p style={{ fontSize: '0.875rem', color: '#047857', marginBottom: '0.25rem' }}>
                        Discount ({Math.round(quote.discount * 100)}%): -${Math.round(quote.basePrice * quote.discount)}
                      </p>
                    )}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.875rem', color: '#047857', marginBottom: '0.25rem' }}>
                      Total Price:
                    </p>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#065f46' }}>
                      ${quote.finalPrice}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#047857', marginTop: '0.75rem', fontStyle: 'italic' }}>
                  * Final price may vary based on specific requirements. Complete the form to confirm your quote.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', gap: '1rem' }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  style={{
                    padding: '0.875rem 2rem',
                    backgroundColor: 'white',
                    color: '#1e3a8a',
                    border: '2px solid #1e3a8a',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && (!formData.serviceType || !formData.planType))
                  }
                  style={{
                    padding: '0.875rem 2rem',
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginLeft: 'auto',
                    transition: 'all 0.3s',
                    opacity: (step === 1 && (!formData.serviceType || !formData.planType)) ? 0.5 : 1
                  }}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    padding: '0.875rem 2rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginLeft: 'auto',
                    transition: 'all 0.3s'
                  }}
                >
                  Submit Quote Request
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            <Clock className="inline h-5 w-5 mr-2" />
            We'll respond within 24 hours with your custom quote
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            ✓ No obligation  •  ✓ Free quote  •  ✓ Trusted by 2,500+ customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
