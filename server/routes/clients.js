const express = require('express');
const router = express.Router();

// Home Route (redirect)
router.get('/', (req, res, next) => {
    res.redirect('/home');
});

router.get('/home', (req, res, next) => {
    res.render('../server/views/client/home');
})

module.exports = router;