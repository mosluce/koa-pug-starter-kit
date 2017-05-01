const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');
const path = require('path');

router.use(views(path.join(__dirname, 'views'), {
    extension: 'pug',
    map: {
        pug: 'pug'
    }
}), require('./controllers'));

router.use('/api', require('./api'));

module.exports = router.routes();


