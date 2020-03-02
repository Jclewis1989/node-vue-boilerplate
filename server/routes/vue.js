const express = require('express');
const router = express.Router();
const path = require('path');

// Send the file then path.join __dirname separated by a commma to go back a directory to access index.html in html
router.get('/client_app', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = router;