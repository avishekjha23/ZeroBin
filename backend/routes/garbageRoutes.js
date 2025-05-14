const express = require('express');
const router = express.Router();

// Example garbage route
router.get('/', (req, res) => {
  res.send('Garbage information');
});

module.exports = router;