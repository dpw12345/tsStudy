
// top types 顶级类型 any unknown
// Object
// Number String Boolean
// number string boolean
// 1 , '123' , false
// never


// 最简单的定义
let str:string = 'str';
let num:number = 123
let und:undefined = undefined
let nul:null = null
let obj:object = {name:'name'}
let arr:Array<number> = [1]


// unknown 类型只能赋值给自身或者any数据类型的值，不能给其他,不能调用任何属性，任何方法，所以它更加安全
let a:unknown = 123
let b:number = 321
a = b
// b = a  报错

let c:unknown = {
    name:'不知道',
    fn(){
        console.log('123');
        
    }
}

// let d:string = c.name  报错


// symbol 类型. 解决属性重复的问题
let s1:symbol = Symbol('1')
let s2:symbol= Symbol('1')

let sObj = {
    name:'symbol',
    [s1]:111,
    [s2]:222
}

console.log(s1 == s2);
console.log(Symbol.for('1') == Symbol.for('1'));
console.log(sObj);


// for in 和 Object.keys() 两个方法遍历读不到symbol
// 专读symbol的 Object.getOwnPropertySymbol
// 都读 Reflect.ownKeys()
console.log(Reflect.ownKeys(sObj));

