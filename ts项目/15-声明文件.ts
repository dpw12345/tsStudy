// 首先 tsc --init 生成tsconfig.json文件
// npm init -y 生成package.json
// 安装 express 和 axios 

// d.ts 文件解决引入第三方包报错的问题
import axios from 'axios'
import express from 'express'

const app = express()

const router = express.Router()

app.use('/api',router)

router.get('/api',(res:any,req:any)=>{
    res.json({
        code:'200'
    })
})

app.listen(9001,()=>{
    console.log('start');
    
})

