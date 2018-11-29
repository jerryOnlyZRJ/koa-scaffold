const Rize = require('rize')
// 可视化过程
// const rize = new Rize({ headless: false })
const rize = new Rize()

// rise example in its website
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
  .assertSee('Node.js')
  .end() // Don't forget to call `end` function to exit browser!
