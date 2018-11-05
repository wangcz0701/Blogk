const express = require('express')
const fs = require('fs')

const app = express()
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views','./views')

app.get('/',(req,res) => {
	res.render('./index.ejs',{})
})
//托管静态资源
app.use('/node_modules',express.static('./node_modules'))


//打开服务器
app.listen(80,() => {
	console.log('server running at http://127.0.0.1:80')
})