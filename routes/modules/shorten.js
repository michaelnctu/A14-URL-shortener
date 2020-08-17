

// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()


const randomURL = require('./randomURL')
const urlData = require('../../models/url')

router.post('/', (req, res) => {
  console.log('req', req.body)
  const link = req.body.url //原網址
  let shortUrl = ''
  const URL = randomURL() //亂數五位數

  urlData.find()
    .lean()
    .then(urlData => {
      console.log('URL DATA', urlData);  //URL data以array型式出現
      // check 五位亂數有無重複
      // for (let i = 0; i < urlData.length; i++) {
      //   if (urlData[i].shortUrl === URL) {
      //     URL = randomURL()
      //   }
      // }

      urlData.forEach(element => {
        if (element[shortUrl] === URL) {
          URL = randomURL()
        }
      }
      )
    })




  urlData.find({ "ogUrl": link })
    .lean()
    // .then(url => console.log("類別為", url))

    // .then (url =>  
    //   if (url === 0) { res.redirect('/') }
    //   else {
    //   shortUrl = url[0].shortUrl
    // })  //將亂數五碼輸出



    .then(url => {  //需加{}
      // 若輸入網址不在資料庫中則導回首頁
      if (url.length === 0) {

        console.log('url.length === 0', URL)
        urlData.create({ ogUrl: link, shortUrl: URL }) //存入資料庫
        res.render('finished', { URL, link })
      }

      else {
        shortUrl = url[0].shortUrl
        res.render('finished', { URL: shortUrl, link: link })
      }
    })

  // .then(url => res.render('finished', { URL: shortUrl, link: link }))



  //   shortUrl = url[0].shortUrl)  //將亂數五碼輸出
  // .then(url => res.render('finished', { URL: shortUrl, link: link }))


  // URL = randomURL() //亂數五位數
  // console.log(URL)
  // urlData.create({ ogUrl: link, shortUrl: URL }) //存入資料庫
  // res.render('finished', { URL, link })

})

module.exports = router