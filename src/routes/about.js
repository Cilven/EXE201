const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('about', { activePage: 'about' });
});


module.exports = router;
