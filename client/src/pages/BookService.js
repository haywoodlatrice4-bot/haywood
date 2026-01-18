import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { services as servicesAPI, bookings as bookingsAPI } from '../utils/api';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';

const BookServicePage = () => {
  const { serviceId } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    bookingDate: '',
    bookingTime: '',
    address: '',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: '',
    specialInstructions: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const fetchService = useCallback(async () => {
    try {
      const response = await servicesAPI.getById(serviceId);
      setService(response.data);
    } catch (error) {
      setError('Service not found');
    } finally {
      setLoading(false);
    }
  }, [serviceId]);

  const fetchAvailability = useCallback(async () => {
    try {
      const response = await bookingsAPI.getAvailability(formData.bookingDate);
      setAvailableTimes(response.data.availableTimes);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  }, [formData.bookingDate]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchService();
  }, [serviceId, isAuthenticated, navigate, fetchService]);

  useEffect(() => {
    if (formData.bookingDate) {
      fetchAvailability();
    }
  }, [formData.bookingDate, fetchAvailability]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await bookingsAPI.create({
        serviceId: parseInt(serviceId),
        ...formData,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate('/my-bookings');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Booking failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
          <button onClick={() => navigate('/services')} className="mt-4 btn-primary">
            View All Services
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Your booking has been successfully created. Redirecting to your bookings...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Service</h1>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-primary-600" />
                <span className="text-2xl font-bold text-primary-600">${service.price}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">{service.duration} minutes</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Booking Date
                </label>
                <input
                  type="date"
                  name="bookingDate"
                  required
                  min={getMinDate()}
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Booking Time
                </label>
                <select
                  name="bookingTime"
                  required
                  value={formData.bookingTime}
                  onChange={handleChange}
                  disabled={!formData.bookingDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '2px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
                <MapPin className="inline h-5 w-5 mr-2" style={{ color: '#1e3a8a' }} />
                Service Location
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                Enter the address where you'd like us to provide the service. We serve all of Indianapolis and surrounding areas.
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Main Street, Apt 4B"
                  value={formData.address}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    placeholder="46201"
                    value={formData.zipCode}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
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

              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '2px solid #e5e7eb'
              }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', color: '#374151' }}>
                  Our Service Area - Indianapolis & Surrounding Areas
                </h4>
                <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '0.5rem', overflow: 'hidden' }}>
                  <iframe
                    title="Indianapolis Service Area Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.13346396655!2d-86.29639085!3d39.76838365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.75rem', textAlign: 'center' }}>
                  We serve Indianapolis, Carmel, Fishers, Noblesville, Greenwood, and surrounding areas
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                name="specialInstructions"
                rows="4"
                placeholder="Any special requests or instructions..."
                value={formData.specialInstructions}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary flex-1"
              >
                {submitting ? 'Booking...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookServicePage;
