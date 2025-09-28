const express = require('express');
const router = express.Router();

// Placeholder upcoming routes
router.get('/', (req, res) => {
  res.json({ message: 'Get upcoming bikes endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get upcoming bike ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create upcoming bike endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update upcoming bike ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete upcoming bike ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
