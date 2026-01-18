import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { services as servicesAPI } from '../utils/api';
import { Car, Home as HomeIcon, Building2, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, [selectedCategory]);

  const fetchServices = async () => {
    try {
      const params = selectedCategory !== 'all' ? { category: selectedCategory } : {};
      const response = await servicesAPI.getAll(params);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'car':
        return Car;
      case 'house':
        return HomeIcon;
      case 'office':
        return Building2;
      default:
        return Car;
    }
  };

  const getPackageColor = (packageType) => {
    switch (packageType) {
      case 'basic':
        return 'bg-blue-100 text-blue-800';
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'elite':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Choose from our premium detailing packages
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setSelectedCategory('car')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'car'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Car Detailing
          </button>
          <button
            onClick={() => setSelectedCategory('house')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'house'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            House Detailing
          </button>
          <button
            onClick={() => setSelectedCategory('office')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'office'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Office Detailing
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = getCategoryIcon(service.category);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-12 w-12 text-primary-600" />
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold uppercase ${getPackageColor(
                          service.package_type
                        )}`}
                      >
                        {service.package_type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="mb-4">
                      <p className="text-3xl font-bold text-primary-600">
                        ${service.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        Duration: {service.duration} minutes
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="font-semibold text-gray-900">Includes:</p>
                      {service.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate(`/book/${service.id}`)}
                      className="btn-primary w-full"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
