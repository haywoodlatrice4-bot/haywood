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
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
