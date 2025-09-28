import React from 'react';
import { motion } from 'framer-motion';

const Showrooms: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Showrooms</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Showrooms page coming soon...</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Showrooms;
