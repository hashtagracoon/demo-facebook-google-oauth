const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ hi: 'again' });
});

module.exports = router;
