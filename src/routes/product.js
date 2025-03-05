const express = require('express');
const router = express.Router();

const productControllers = require('../app/controllers/ProductController');
router.get('/productShow', productControllers.show);
router.get('/product/:slug', productControllers.showDetail);
router.get('/combo', productControllers.showCombo);
router.get('/:slug', productControllers.showDetail);

router.get('/combo/:slug', productControllers.ShowDetailCombo);

module.exports = router;
