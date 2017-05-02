const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    await ctx.render('index', { title: 'Welcome' });
})

module.exports = router.routes();