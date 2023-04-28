const express = require('express');
const bookingRouter = express.Router();

// GET request handler for booking form
router.get('/', (req, res) => {
  res.render('book-performance-form');
});

// POST request handler for booking form submissio
router.post('/', (req, res) => {
  // Handle form submission logic
  res.redirect('/book-performance/thank-you');
});

// GET request handler for thank you page
router.get('/thank-you', (req, res) => {
  res.render('book-performance-thank-you');
});

module.exports = bookingRouter;