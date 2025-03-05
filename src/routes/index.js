const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');
const loginRouter = require('./login');
const cartRouter = require('./cart');
const customGiftRouter = require('./customGift');
// const product = require('./product');
const aboutRouter = require('./about');
const contactRouter = require('./contact');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/product', productRouter);
    app.use('/account', loginRouter);
    app.use('/cart', cartRouter);
    app.use('/custom-gifts', customGiftRouter);
    app.use('/about', aboutRouter); // Đưa lên trên
    app.use('/contact', contactRouter); // Đưa lên trên
    app.use('/', siteRouter); // Để route '/' sau cùng
}


module.exports = route;
