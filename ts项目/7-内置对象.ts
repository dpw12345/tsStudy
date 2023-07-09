// 内置对象
let data7:Date = new Date()
console.log(data7);

// promise 对象比较特殊。 Promise<T> 这里的T是指 后面resolve的类型
let pro7:Promise<string> = new Promise((resolve,reject)=>{resolve('ding')})
pro7.then((res)=>{
    console.log(res.concat());
})
