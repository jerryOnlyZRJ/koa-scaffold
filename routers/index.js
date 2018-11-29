const Router = require('koa-router')
const apiRouter = require('./api')

const router = new Router()
// 加载api路由
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())

// 配置根路由
router.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = await ctx.render('index', {
    name: 'Jerry',
    data: 'Welcome to koa'
  })
})

module.exports = router
