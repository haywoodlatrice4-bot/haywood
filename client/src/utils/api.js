import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

export const services = {
  getAll: (params) => api.get('/services', { params }),
  getById: (id) => api.get(`/services/${id}`),
  getByCategory: (category) => api.get(`/services/category/${category}`),
};

export const bookings = {
  create: (data) => api.post('/bookings', data),
  getMyBookings: () => api.get('/bookings/my-bookings'),
  getById: (id) => api.get(`/bookings/${id}`),
  cancel: (id) => api.patch(`/bookings/${id}/cancel`),
  getAvailability: (date) => api.get(`/bookings/availability/${date}`),
};

export const reviews = {
  create: (data) => api.post('/reviews', data),
  getAll: (params) => api.get('/reviews', { params }),
  getStats: () => api.get('/reviews/stats'),
};

export const gallery = {
  getAll: (params) => api.get('/gallery', { params }),
};

export const admin = {
  getDashboard: () => api.get('/admin/dashboard'),
  getBookings: (params) => api.get('/admin/bookings', { params }),
  updateBookingStatus: (id, status) => api.patch(`/admin/bookings/${id}/status`, { status }),
  getCustomers: () => api.get('/admin/customers'),
  getRevenue: (params) => api.get('/admin/revenue', { params }),
};

export default api;
