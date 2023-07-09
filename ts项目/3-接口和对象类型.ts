// 接口 interface 名字首字母大写为规范,变量使用interface定义的要求属性跟接口的完全一样

interface Name {
    name:string,
    age:number,
    // 如果不确定下面还会有新增的属性，使用propName 索引签名
    [propName:string]:any
}

let nameA1:Name = {
    name:'swk',
    age:18,
    // 使用了propName
    a:1,
    b:2
}

// 属性可选 ?，只可读 readonly 前缀修饰符

interface Options {
    name:string,
    age:number,
    gender?:string,
    readonly id:number
}

let options:Options = {
    name:'skw',
    age:12,
    id:12
}

  options.name = 'zbj'
//   options.id = 13  报错

// 继承 extends
interface A {
    a:string
}

interface B extends A{
    b:number
}

const aExtendsB:B = {
    a:'123',
    b:18
}