import React from 'react';   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import BikeDetail from './pages/BikeDetail';
import UsedBikes from './pages/UsedBikes';
import Showrooms from './pages/Showrooms';
import Compare from './pages/Compare';
import Finance from './pages/Finance';
import Upcoming from './pages/Upcoming';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Bookings from './pages/Bookings';
import DealerDashboard from './pages/DealerDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-neutral-50 scrollbar-thin">
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bikes" element={<Bikes />} />
              <Route path="/bikes/:id" element={<BikeDetail />} />
              <Route path="/used-bikes" element={<UsedBikes />} />
              <Route path="/showrooms" element={<Showrooms />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/bookings"
                element={
                  <ProtectedRoute>
                    <Bookings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dealer"
                element={
                  <ProtectedRoute allowedRoles={['dealer', 'admin']}>
                    <DealerDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
