import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Building2, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Car,
      title: 'Car Detailing',
      description: 'Professional interior and exterior car detailing services',
      packages: ['Basic - $79', 'Premium - $149', 'Elite - $249'],
      link: '/services/car',
    },
    {
      icon: HomeIcon,
      title: 'House Detailing',
      description: 'Comprehensive home cleaning and maintenance services',
      packages: ['Basic - $199', 'Premium - $349', 'Elite - $549'],
      link: '/services/house',
    },
    {
      icon: Building2,
      title: 'Office Detailing',
      description: 'Commercial cleaning for offices and workspaces',
      packages: ['Basic - $299', 'Premium - $499', 'Elite - $799'],
      link: '/services/office',
    },
  ];

  const features = [
    'Professional & Experienced Team',
    'Eco-Friendly Products',
    'Satisfaction Guaranteed',
    'Flexible Scheduling',
    'Competitive Pricing',
    'Indianapolis Local',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
              Three Space Shine
            </h1>
            <p className="text-3xl mb-4 font-semibold">
              Premium Detailing Services in Indianapolis, Indiana
            </p>
            <p className="text-2xl mb-6 text-blue-100">
              Car • House • Office - We Make Everything Shine
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <Phone className="h-6 w-6" />
              <a href="tel:3174463498" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                (317) 446-3498
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Book Now</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/gallery"
                className="border-3 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 shadow-xl"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <service.icon className="h-16 w-16 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.packages.map((pkg, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{pkg}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="btn-primary w-full text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow"
              >
                <Star className="h-6 w-6 text-shine-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Book your detailing service today and experience the Three Space Shine difference
          </p>
          <Link
            to="/services"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Book Your Service</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Phone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:3174463498" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                (317) 446-3498
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Mail className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:info@threespacshine.com" className="text-lg text-blue-600 hover:text-blue-800">
                info@threespacshine.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <MapPin className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-lg text-gray-700">Indianapolis, Indiana</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Three Space Shine</h3>
              <p className="text-gray-400">
                Premium detailing services for your car, house, and office in Indianapolis, Indiana.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Indianapolis, Indiana</p>
              <p className="text-gray-400">Phone: (317) 446-3498</p>
              <p className="text-gray-400">Email: info@threespacshine.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Three Space Shine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
