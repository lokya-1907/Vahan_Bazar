import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'dealer' | 'admin';
  phone?: string;
  address?: string;
  favorites?: string[];
}

export interface Bike {
  id: string;
  name: string;
  brand: string;
  type: 'bike' | 'scooter' | 'electric';
  price: number;
  fuel_type: 'petrol' | 'electric' | 'hybrid';
  mileage?: number;
  engine_cc?: number;
  power?: number;
  torque?: number;
  image_urls: string[];
  specs: Record<string, any>;
  offers: string[];
  features: string[];
  colors: string[];
  is_available: boolean;
  average_rating?: number;
  review_count?: number;
  dealer?: {
    business_name: string;
    showroom_id: string;
  };
}

export interface UsedBike {
  id: string;
  seller_id: string;
  seller_name: string;
  contact: string;
  model: string;
  brand: string;
  year: number;
  price: number;
  mileage?: number;
  fuel_type: 'petrol' | 'electric' | 'hybrid';
  image_urls: string[];
  description?: string;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  status: 'available' | 'sold' | 'pending';
  location?: string;
  city?: string;
  state?: string;
}

export interface Showroom {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  latitude: number;
  longitude: number;
  contact: string;
  email?: string;
  website?: string;
  brands: string[];
  services: string[];
  working_hours: Record<string, string>;
  is_active: boolean;
  rating: number;
  review_count: number;
}

export interface Booking {
  id: string;
  user_id: string;
  bike_id: string;
  showroom_id: string;
  booking_date: string;
  booking_time: string;
  contact: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  dealer_notes?: string;
  bike?: Bike;
  showroom?: Showroom;
  user?: User;
}

export interface Review {
  id: string;
  user_id: string;
  bike_id: string;
  rating: number;
  comment: string;
  pros: string[];
  cons: string[];
  is_verified: boolean;
  helpful_count: number;
  user?: User;
}

export interface Alert {
  id: string;
  user_id: string;
  bike_id: string;
  target_price: number;
  alert_type: 'price_drop' | 'new_launch' | 'offer';
  is_active: boolean;
  last_triggered?: string;
  trigger_count: number;
  bike?: Bike;
}

export interface UpcomingBike {
  id: string;
  name: string;
  brand: string;
  launch_date: string;
  expected_price?: number;
  teaser_image?: string;
  description?: string;
  expected_specs: Record<string, any>;
  category: 'bike' | 'scooter' | 'electric';
  fuel_type: 'petrol' | 'electric' | 'hybrid';
  is_featured: boolean;
  pre_booking_open: boolean;
  pre_booking_amount?: number;
}

// API Services
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }).then((res: AxiosResponse) => res.data),
  
  register: (name: string, email: string, password: string, phone?: string, address?: string) =>
    api.post('/auth/register', { name, email, password, phone, address }).then((res: AxiosResponse) => res.data),
  
  getMe: () =>
    api.get('/auth/me').then((res: AxiosResponse) => res.data),
  
  refreshToken: () =>
    api.post('/auth/refresh').then((res: AxiosResponse) => res.data),
  
  addToFavorites: (userId: string, bikeId: string) =>
    api.post(`/users/${userId}/favorites`, { bikeId }).then((res: AxiosResponse) => res.data),
  
  removeFromFavorites: (userId: string, bikeId: string) =>
    api.delete(`/users/${userId}/favorites/${bikeId}`).then((res: AxiosResponse) => res.data),
};

export const bikeService = {
  getBikes: (params?: any) =>
    api.get('/bikes', { params }).then((res: AxiosResponse) => res.data),
  
  getBike: (id: string) =>
    api.get(`/bikes/${id}`).then((res: AxiosResponse) => res.data),
  
  getBrands: () =>
    api.get('/bikes/brands/list').then((res: AxiosResponse) => res.data),
  
  getFeatured: () =>
    api.get('/bikes/featured/list').then((res: AxiosResponse) => res.data),
  
  createBike: (data: Partial<Bike>) =>
    api.post('/bikes', data).then((res: AxiosResponse) => res.data),
  
  updateBike: (id: string, data: Partial<Bike>) =>
    api.put(`/bikes/${id}`, data).then((res: AxiosResponse) => res.data),
  
  deleteBike: (id: string) =>
    api.delete(`/bikes/${id}`).then((res: AxiosResponse) => res.data),
};

export const usedBikeService = {
  getUsedBikes: (params?: any) =>
    api.get('/used-bikes', { params }).then((res: AxiosResponse) => res.data),
  
  getUsedBike: (id: string) =>
    api.get(`/used-bikes/${id}`).then((res: AxiosResponse) => res.data),
  
  createUsedBike: (data: Partial<UsedBike>) =>
    api.post('/used-bikes/sell-bike', data).then((res: AxiosResponse) => res.data),
  
  updateUsedBike: (id: string, data: Partial<UsedBike>) =>
    api.put(`/used-bikes/${id}`, data).then((res: AxiosResponse) => res.data),
  
  deleteUsedBike: (id: string) =>
    api.delete(`/used-bikes/${id}`).then((res: AxiosResponse) => res.data),
  
  markAsSold: (id: string) =>
    api.patch(`/used-bikes/${id}/sold`).then((res: AxiosResponse) => res.data),
  
  getUserUsedBikes: (userId: string) =>
    api.get(`/used-bikes/user/${userId}`).then((res: AxiosResponse) => res.data),
};

export const showroomService = {
  getShowrooms: (params?: any) =>
    api.get('/showrooms', { params }).then((res: AxiosResponse) => res.data),
  
  getShowroom: (id: string) =>
    api.get(`/showrooms/${id}`).then((res: AxiosResponse) => res.data),
  
  getNearby: (lat: number, lng: number, radius?: number) =>
    api.get('/showrooms/nearby', { params: { lat, lng, radius } }).then((res: AxiosResponse) => res.data),
  
  getCities: () =>
    api.get('/showrooms/cities/list').then((res: AxiosResponse) => res.data),
};

export const bookingService = {
  bookTestRide: (data: any) =>
    api.post('/bookings/book-test-ride', data).then((res: AxiosResponse) => res.data),
  
  getUserBookings: (userId: string) =>
    api.get(`/bookings/user/${userId}`).then((res: AxiosResponse) => res.data),
  
  getBooking: (id: string) =>
    api.get(`/bookings/${id}`).then((res: AxiosResponse) => res.data),
  
  updateBookingStatus: (id: string, status: string, dealerNotes?: string) =>
    api.patch(`/bookings/${id}/status`, { status, dealer_notes: dealerNotes }).then((res: AxiosResponse) => res.data),
  
  cancelBooking: (id: string) =>
    api.patch(`/bookings/${id}/cancel`).then((res: AxiosResponse) => res.data),
  
  getAvailableSlots: (showroomId: string, date: string) =>
    api.get(`/bookings/showroom/${showroomId}/slots`, { params: { date } }).then((res: AxiosResponse) => res.data),
};

export const reviewService = {
  createReview: (data: any) =>
    api.post('/reviews', data).then((res: AxiosResponse) => res.data),
  
  getReviews: (bikeId: string, params?: any) =>
    api.get(`/reviews/${bikeId}`, { params }).then((res: AxiosResponse) => res.data),
  
  updateReview: (id: string, data: any) =>
    api.put(`/reviews/${id}`, data).then((res: AxiosResponse) => res.data),
  
  deleteReview: (id: string) =>
    api.delete(`/reviews/${id}`).then((res: AxiosResponse) => res.data),
  
  markHelpful: (id: string) =>
    api.post(`/reviews/${id}/helpful`).then((res: AxiosResponse) => res.data),
  
  getUserReviews: (userId: string) =>
    api.get(`/reviews/user/${userId}`).then((res: AxiosResponse) => res.data),
};

export const alertService = {
  createAlert: (data: any) =>
    api.post('/alerts', data).then((res: AxiosResponse) => res.data),
  
  getUserAlerts: (userId: string) =>
    api.get(`/alerts/${userId}`).then((res: AxiosResponse) => res.data),
  
  updateAlert: (id: string, data: any) =>
    api.put(`/alerts/${id}`, data).then((res: AxiosResponse) => res.data),
  
  deleteAlert: (id: string) =>
    api.delete(`/alerts/${id}`).then((res: AxiosResponse) => res.data),
  
  deactivateAlert: (id: string) =>
    api.patch(`/alerts/${id}/deactivate`).then((res: AxiosResponse) => res.data),
  
  activateAlert: (id: string) =>
    api.patch(`/alerts/${id}/activate`).then((res: AxiosResponse) => res.data),
  
  getAlertsCount: (userId: string) =>
    api.get(`/alerts/${userId}/count`).then((res: AxiosResponse) => res.data),
};

export const compareService = {
  compareBikes: (ids: string[]) =>
    api.post('/compare', { ids }).then((res: AxiosResponse) => res.data),
  
  getComparisonHistory: () =>
    api.get('/compare/history').then((res: AxiosResponse) => res.data),
};

export const financeService = {
  calculateEMI: (data: any) =>
    api.post('/finance/emi', data).then((res: AxiosResponse) => res.data),
  
  calculateFuelCost: (data: any) =>
    api.post('/finance/fuel-cost', data).then((res: AxiosResponse) => res.data),
  
  getLoanOffers: () =>
    api.get('/finance/loan-offers').then((res: AxiosResponse) => res.data),
  
  calculateTCO: (data: any) =>
    api.post('/finance/tco', data).then((res: AxiosResponse) => res.data),
};

export const upcomingService = {
  getUpcomingBikes: (params?: any) =>
    api.get('/upcoming', { params }).then((res: AxiosResponse) => res.data),
  
  getUpcomingBike: (id: string) =>
    api.get(`/upcoming/${id}`).then((res: AxiosResponse) => res.data),
  
  getFeatured: () =>
    api.get('/upcoming/featured/list').then((res: AxiosResponse) => res.data),
  
  getByBrand: (brand: string, limit?: number) =>
    api.get(`/upcoming/brand/${brand}`, { params: { limit } }).then((res: AxiosResponse) => res.data),
  
  getTimeline: (months?: number) =>
    api.get('/upcoming/timeline', { params: { months } }).then((res: AxiosResponse) => res.data),
  
  getBrands: () =>
    api.get('/upcoming/brands/list').then((res: AxiosResponse) => res.data),
};

export default api;
