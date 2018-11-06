const moment = require('moment')
const conn = require('../db/index.js')
const marked = require('marked')

module.exports = {
    showAddArticlePage (req,res) {
        if(!render.seeeion.isLogin) return res.redirect('/')
        res.render('./article/add.ejs',{
            user:req.session.user,
            isLogin:req.session.isLogin
        })
    },

    //添加文章
    addArticle (req,res) {
        const body = req.body
        body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        const sql = 'insert into blog_article set?'
        conn.query(sql,body,(err,result) => {
            if(err) return res.send({mas:'发表文章失败'})
            if(result.affectedRows !==1)  return res.send({ msg: '发表文章失败！'})
            res.send({msg:'发表文章成功',status:200,insertId: result.insertId})
        })
    },

    //展示文章详情页
    showArticleDetail (req,res) {
        const id = req.parmas.id
        const sql = 'select * from blog_article where id=?'
        conn.query(sql,id,(err,result) => {
            if(err) return  res.send({mas:'获取文章详情失败'})
            if(result.length !==1) return res.redirect('/')
            const html = marked(result[0].content)
            result[0].content = html
            res.render('./article/info.ejs',{user:req.session.user,islogin: req.session.islogin, article: result[0]})
        })
    },

    //展示编辑页面
    showEditPage (req,res) {
        if(!req.session.isLogin) return res.redirect('/')
        const sql = 'select * from blog_article where id=?'
        conn.query(sql,req.params.id,(err,result) => {
            if(err) return  res.redirect('/')
            if(result.length !==1) return res.redirect('/')
            res.render('./article/edit.ejs',{user:req.session.user,islogin: req.session.islogin, article: result[0]})
        })
    },

    //编辑文章
    editArticle (req,res) {
        const sql = 'update blog_article set? where id=?'
        conn.query(sql,[req.body,req.body.id],(err,result) => {
            if(err) return res.send({msg:'修改文章失败',status:501})
            if(result.affectedRows !==1) return res.send({msg: '修改文章失败！', status: 502})
            res.send({msg:'ok',status:200})
        })
    }

}