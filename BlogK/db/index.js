const mysql = require('mysql')

const conn = mysql.createConnection({
  host: '127.0.0.1',
  database: 'blog',
  user: 'root',
  password: 'root'
})

// 把当前模块中创建的 conn 数据库连接对象，暴露出去
module.exports = conn
