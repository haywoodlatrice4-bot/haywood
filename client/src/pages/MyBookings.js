import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { bookings as bookingsAPI } from '../utils/api';
import { Calendar, Clock, MapPin, DollarSign, XCircle } from 'lucide-react';

const MyBookingsPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchBookings();
  }, [isAuthenticated, navigate]);

  const fetchBookings = async () => {
    try {
      const response = await bookingsAPI.getMyBookings();
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      await bookingsAPI.cancel(bookingId);
      fetchBookings();
    } catch (error) {
      alert('Failed to cancel booking');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">View and manage your detailing appointments</p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg mb-4">You don't have any bookings yet</p>
            <button
              onClick={() => navigate('/services')}
              className="btn-primary"
            >
              Book a Service
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{booking.service_name}</h3>
                    <p className="text-gray-600 capitalize">{booking.category} Detailing - {booking.package_type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold uppercase ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span>{new Date(booking.booking_date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span>{booking.booking_time}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span>{booking.address}, {booking.city}, {booking.state}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-700">
                    <DollarSign className="h-5 w-5 text-primary-600" />
                    <span className="font-semibold">${booking.total_price}</span>
                  </div>
                </div>

                {booking.special_instructions && (
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Special Instructions:</span> {booking.special_instructions}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Booked on {new Date(booking.created_at).toLocaleDateString()}
                  </div>

                  {booking.status === 'pending' && (
                    <button
                      onClick={() => handleCancelBooking(booking.id)}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                    >
                      <XCircle className="h-5 w-5" />
                      <span>Cancel Booking</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
