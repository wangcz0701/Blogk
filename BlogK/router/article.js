const express = require('express')
const router = express.Router()

const ctrl = require('../controller/article.js')

//监听客户端的get请求，显示文章添加页面
router.get('/article/add',ctrl.showAddArticlePage)

//监听客户端发表文章的请求
router.get('/article/add',ctrl.addArticle)

//监听客户端查看文章详情的请求
router.get('/article/add',ctrl.showArticleDetail)

//监听客户端请求编辑文章页面
router.get('/article/add',ctrl.showEditPage)

//用户要编辑文章
router.get('/article/add',ctrl.editArticle)

module.exports = router