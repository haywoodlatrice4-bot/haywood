import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import BookServicePage from './pages/BookService';
import MyBookingsPage from './pages/MyBookings';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminCustomers from './pages/AdminCustomers';
import AdminGallery from './pages/AdminGallery';
import AdminReviews from './pages/AdminReviews';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category" element={<ServicesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/book/:serviceId" element={<BookServicePage />} />
            <Route path="/my-bookings" element={<MyBookingsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/customers" element={<AdminCustomers />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/reviews" element={<AdminReviews />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
