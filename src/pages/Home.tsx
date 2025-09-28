import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Star, 
  MapPin, 
  Calculator, 
  TrendingUp,
  ArrowRight,
  Play
} from 'lucide-react';
import { bikeService, upcomingService } from '../services/api';
import { Bike, UpcomingBike } from '../services/api';

const Home: React.FC = () => {
  const [featuredBikes, setFeaturedBikes] = useState<Bike[]>([]);
  const [upcomingBikes, setUpcomingBikes] = useState<UpcomingBike[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuredResponse, upcomingResponse] = await Promise.all([
          bikeService.getFeatured(),
          upcomingService.getFeatured()
        ]);
        setFeaturedBikes(featuredResponse.bikes);
        setUpcomingBikes(upcomingResponse.upcoming_bikes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find your perfect bike with our advanced filtering system',
    },
    {
      icon: MapPin,
      title: 'Showroom Locator',
      description: 'Discover nearby showrooms and book test rides',
    },
    {
      icon: Calculator,
      title: 'Finance Tools',
      description: 'Calculate EMI and fuel costs with our built-in calculators',
    },
    {
      icon: TrendingUp,
      title: 'Price Alerts',
      description: 'Get notified when prices drop on your favorite bikes',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Bike Models' },
    { number: '50+', label: 'Cities' },
    { number: '99%', label: 'Satisfaction Rate' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen scrollbar-thin">
      {/* Hero Section */}
      <section className="relative hero-bg text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl float-animation-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
                  Trusted by 10,000+ customers
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Find Your Perfect
                  <span className="block gradient-text-accent">Two-Wheeler</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Discover the best bikes, scooters, and electric vehicles with transparent pricing, 
                  expert reviews, and hassle-free test rides.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/bikes"
                  className="btn-accent inline-flex items-center justify-center group"
                >
                  <span>Explore Bikes</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button className="btn-secondary inline-flex items-center justify-center group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Watch Demo
                </button>
              </div>
              
              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-sm text-white/80">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Bike Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Cities</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-dark rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">Quick Search</h3>
                  <p className="text-white/80">Find your dream bike in seconds</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white/90">What are you looking for?</label>
                    <select className="input bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-accent-400">
                      <option value="" className="text-gray-900">Select type</option>
                      <option value="bike" className="text-gray-900">Bike</option>
                      <option value="scooter" className="text-gray-900">Scooter</option>
                      <option value="electric" className="text-gray-900">Electric</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white/90">Budget Range</label>
                    <select className="input bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-accent-400">
                      <option value="" className="text-gray-900">Select budget</option>
                      <option value="0-50000" className="text-gray-900">Under ₹50,000</option>
                      <option value="50000-100000" className="text-gray-900">₹50,000 - ₹1,00,000</option>
                      <option value="100000-200000" className="text-gray-900">₹1,00,000 - ₹2,00,000</option>
                      <option value="200000+" className="text-gray-900">Above ₹2,00,000</option>
                    </select>
                  </div>
                  
                  <button className="w-full btn-accent">
                    Search Bikes
                  </button>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400/20 rounded-full blur-xl animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-full blur-lg animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="card p-8 group-hover:shadow-large transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Featured Bikes
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the best bikes, carefully curated for quality and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bike.image_urls[0] || '/placeholder-bike.jpg'}
                    alt={bike.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 glass rounded-full px-4 py-2 text-sm font-semibold">
                    {bike.brand}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to={`/bikes/${bike.id}`}
                      className="btn-primary w-full text-center"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {bike.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < (bike.average_rating || 0) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-neutral-500">
                      ({bike.review_count || 0} reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold gradient-text">
                      ₹{bike.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                      {bike.fuel_type}
                    </span>
                  </div>
                  <Link
                    to={`/bikes/${bike.id}`}
                    className="btn-primary w-full text-center group-hover:scale-105 transition-transform duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/bikes"
              className="btn-primary inline-flex items-center group"
            >
              View All Bikes
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Launches */}
      {upcomingBikes.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Launches
              </h2>
              <p className="text-xl text-gray-600">
                Get ready for the next generation of two-wheelers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingBikes.map((bike, index) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={bike.teaser_image || '/placeholder-bike.jpg'}
                      alt={bike.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{bike.name}</h3>
                    <p className="text-gray-600 mb-4">{bike.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-primary-600">
                        {bike.expected_price ? `₹${bike.expected_price.toLocaleString()}` : 'TBA'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(bike.launch_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why Choose Vahan Bazar?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We make buying your dream bike simple, transparent, and enjoyable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="card p-8 group-hover:shadow-large transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-animation"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-400/20 rounded-full blur-2xl float-animation-delayed"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Find Your Perfect Bike?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join thousands of satisfied customers who found their dream bike with us. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/bikes"
                className="btn-accent inline-flex items-center justify-center group text-lg px-8 py-4"
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/showrooms"
                className="btn-secondary inline-flex items-center justify-center group text-lg px-8 py-4"
              >
                Find Showroom
                <MapPin className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
