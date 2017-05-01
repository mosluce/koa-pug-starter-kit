const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    await ctx.render('index', { hello: 'I am world' });
})

module.exports = router.routes();