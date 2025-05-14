const express = require('express');
const router = express.Router();

// Example contact route
router.post('/', (req, res) => {
  res.send('Contact form submitted');
});

module.exports = router;
