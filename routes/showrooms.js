const express = require('express');
const router = express.Router();

// Placeholder showroom routes
router.get('/', (req, res) => {
  res.json({ message: 'Get showrooms endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get showroom ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create showroom endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update showroom ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete showroom ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
