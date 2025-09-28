const express = require('express');
const router = express.Router();

// Placeholder finance routes
router.get('/', (req, res) => {
  res.json({ message: 'Get finance options endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get finance option ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create finance option endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update finance option ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete finance option ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
