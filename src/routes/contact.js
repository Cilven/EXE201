const express = require('express');
const router = express.Router();
// router.get('/', (req, res) => {
//     res.render('contact', { activePage: 'contact' });
// });
const contactControllers = require('../app/controllers/ContactController');
router.get('/', (req, res) => {
    contactControllers.show(req, res, { activePage: 'contact' });
});


module.exports = router;
