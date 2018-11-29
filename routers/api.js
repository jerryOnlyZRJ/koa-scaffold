const Router = require('koa-router')
const indexModel = require('../models/index')

const router = new Router()

// 配置与models配合的数据路由
router.get('/data', async (ctx, next) => {
  ctx.body = await indexModel.getData()
})

router.post('/post', async (ctx, next) => {
  ctx.response.header = 'Content-type: application/json;charset:utf-8;'
  ctx.body = ctx.request.body
})

module.exports = router
