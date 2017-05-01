const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const path = require('path');

const routes = require('./app');
const port = process.env.PORT || 3000;

app.use(logger())
app.use(koaStatic(path.join(__dirname, 'public')))
app.use(routes);

const server = app.listen(port);

server.on('listening', () => console.log(`server is listening on ${port}`));
server.on('error', console.log);