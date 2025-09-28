const express = require('express');
const router = express.Router();

// Placeholder used bikes routes
router.get('/', (req, res) => {
  res.json({ message: 'Get used bikes endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get used bike ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create used bike endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update used bike ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete used bike ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
