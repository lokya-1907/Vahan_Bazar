const express = require('express');
const router = express.Router();

// Placeholder compare routes
router.get('/', (req, res) => {
  res.json({ message: 'Get comparison endpoint - to be implemented' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create comparison endpoint - to be implemented' });
});

module.exports = router;
