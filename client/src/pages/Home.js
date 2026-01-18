import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Building2, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Users, Award, Clock, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Car,
      title: 'Car Detailing',
      description: 'Professional interior and exterior car detailing services',
      packages: ['Basic - $79', 'Premium - $149', 'Elite - $249'],
      link: '/services/car',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop'
    },
    {
      icon: HomeIcon,
      title: 'House Detailing',
      description: 'Comprehensive home cleaning and maintenance services',
      packages: ['Basic - $199', 'Premium - $349', 'Elite - $549'],
      link: '/services/house',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop'
    },
    {
      icon: Building2,
      title: 'Office Detailing',
      description: 'Commercial cleaning for offices and workspaces',
      packages: ['Basic - $299', 'Premium - $499', 'Elite - $799'],
      link: '/services/office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Car Detailing - Elite Package',
      rating: 5,
      review: 'Absolutely amazing service! My car looks brand new. The team was professional, punctual, and the attention to detail was incredible. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Davis',
      service: 'House Detailing - Premium Package',
      rating: 5,
      review: 'Three Space Shine transformed my home! Every corner was spotless. They used eco-friendly products and were very respectful of our space. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Jennifer Martinez',
      service: 'Office Detailing - Elite Package',
      rating: 5,
      review: 'Our office has never looked better! The team worked efficiently after hours and left everything pristine. Our clients have noticed the difference!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Thompson',
      service: 'Car Detailing - Premium Package',
      rating: 5,
      review: 'Best detailing service in Indianapolis! They removed stains I thought were permanent. The interior smells fresh and the exterior shines like a mirror!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Wilson',
      service: 'House Detailing - Basic Package',
      rating: 5,
      review: 'Even the basic package exceeded my expectations! Very thorough cleaning, friendly staff, and great value for money. Will definitely book again!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
    },
    {
      name: 'David Brown',
      service: 'Office Detailing - Premium Package',
      rating: 5,
      review: 'Professional service from start to finish. They worked around our schedule and delivered outstanding results. Our workspace feels brand new!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { icon: Users, number: '2,500+', label: 'Happy Customers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Customer Support' },
    { icon: TrendingUp, number: '98%', label: 'Satisfaction Rate' }
  ];

  const beforeAfter = [
    {
      before: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop',
      title: 'Car Interior Transformation'
    },
    {
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop',
      title: 'Living Room Deep Clean'
    },
    {
      before: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      title: 'Office Space Detailing'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            <h1 className="text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in">
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Professional detailing for every need</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <service.icon className="absolute bottom-4 left-4 h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700 font-medium">{pkg}</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">See The Difference</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Real results from real customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-semibold text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-8">
            Book your detailing service today and experience the Three Space Shine difference
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/services"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-xl"
            >
              <span>Book Your Service</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            <a
              href="tel:3174463498"
              className="border-3 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Phone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:3174463498" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                (317) 446-3498
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Mail className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:info@threespacshine.com" className="text-lg text-blue-600 hover:text-blue-800">
                info@threespacshine.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <MapPin className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-lg text-gray-700">Indianapolis, Indiana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Three Space Shine</h3>
              <p className="text-gray-400 mb-4">
                Premium detailing services for your car, house, and office in Indianapolis, Indiana.
              </p>
              <div className="flex space-x-2">
                {renderStars(5)}
              </div>
              <p className="text-sm text-gray-400 mt-2">Rated 5/5 by 2,500+ customers</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Indianapolis, Indiana</p>
              <p className="text-gray-400 mb-2">
                <a href="tel:3174463498" className="hover:text-white">Phone: (317) 446-3498</a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:info@threespacshine.com" className="hover:text-white">Email: info@threespacshine.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Three Space Shine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
