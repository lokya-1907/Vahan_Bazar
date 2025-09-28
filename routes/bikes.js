const express = require('express');
const router = express.Router();

// Placeholder bike routes
router.get('/', (req, res) => {
  res.json({ message: 'Get bikes endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get bike ${req.params.id} endpoint - to be implemented` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create bike endpoint - to be implemented' });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update bike ${req.params.id} endpoint - to be implemented` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete bike ${req.params.id} endpoint - to be implemented` });
});

module.exports = router;
