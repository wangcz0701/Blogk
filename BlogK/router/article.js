const express = require('express')
const router = express.Router()

const ctrl = require('../controller/article.js')

//�����ͻ��˵�get������ʾ�������ҳ��
router.get('/article/add',ctrl.showAddArticlePage)

//�����ͻ��˷������µ�����
router.get('/article/add',ctrl.addArticle)

//�����ͻ��˲鿴�������������
router.get('/article/add',ctrl.showArticleDetail)

//�����ͻ�������༭����ҳ��
router.get('/article/add',ctrl.showEditPage)

//�û�Ҫ�༭����
router.get('/article/add',ctrl.editArticle)

module.exports = router