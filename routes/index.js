
// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入  模組程式碼
const shorten = require('./modules/shorten')

// 引入 home 模組程式碼
const home = require('./modules/home')

const randomURL = require('./modules/randomURL')

// 將網址結構符合 導向 home 模組 
router.use('/', home)

router.use('/shorten', shorten)


// 匯出路由器
module.exports = router
