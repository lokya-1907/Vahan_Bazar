const express = require('express');
const router = express.Router();

// Placeholder booking routes
router.get('/', (req, res) => {
  res.json({ message: 'Get bookings endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get booking ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create booking endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update booking ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete booking ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
