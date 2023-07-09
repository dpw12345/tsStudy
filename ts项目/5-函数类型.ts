// 函数定义类型和返回值｜箭头函数
// 函数默认的参数｜函数可选参数

function add(a:number = 10,b?:number):number{
    return b?a+b:a
}

const res = add(1,2)
console.log(res);

// 参数是一个对象怎样定义
// 函数this类型

interface User {
    user:string[];
    add:(a:string)=>void;
    get:(b:number) => number
}
let obj5:User = {
    user:['123'],
    add(a){
        this.user.push(a)
    },
    get(b){
        return b
    }
}
obj5.add('3')
console.log(obj5);
