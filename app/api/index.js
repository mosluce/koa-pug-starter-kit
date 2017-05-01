const Router = require('koa-router');
const router = new Router();

router.get('/abc', (ctx) => {
    ctx.body = 123;
});

module.exports = router.routes();