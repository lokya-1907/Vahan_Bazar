import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  User, 
  LogOut, 
  Settings,
  Bike,
  MapPin,
  Calculator,
  Calendar
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/bikes?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  const navItems = [
    { name: 'Bikes', href: '/bikes', icon: Bike },
    { name: 'Used Bikes', href: '/used-bikes', icon: Bike },
    { name: 'Showrooms', href: '/showrooms', icon: MapPin },
    { name: 'Compare', href: '/compare', icon: Settings },
    { name: 'Finance', href: '/finance', icon: Calculator },
    { name: 'Upcoming', href: '/upcoming', icon: Calendar },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Vahan Bazar</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 group-hover:text-primary-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search bikes, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-12 pr-4 py-3 bg-neutral-50 border-neutral-200 hover:bg-white hover:border-primary-300 focus:bg-white focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-200"
                />
              </div>
            </form>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            {isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/favorites"
                  className="p-3 text-neutral-700 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 relative group"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  {user?.favorites && user.favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">
                      {user.favorites.length}
                    </span>
                  )}
                </Link>
              </motion.div>
            )}

            {/* Profile Menu */}
            <div className="relative">
              {isAuthenticated ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hidden sm:block font-medium">{user?.name}</span>
                </motion.button>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn-primary px-6 py-2 text-sm"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Profile Dropdown */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Calendar className="w-4 h-4 mr-3" />
                      My Bookings
                    </Link>
                    {user?.role === 'dealer' && (
                      <Link
                        to="/dealer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Dealer Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 group-hover:text-primary-500 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search bikes, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-12 pr-4 py-3 bg-neutral-50 border-neutral-200 hover:bg-white hover:border-primary-300 focus:bg-white focus:border-primary-500 focus:ring-primary-500/20 transition-all duration-200"
              />
            </div>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-200/50 py-6"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
