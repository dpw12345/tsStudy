// 在 tsconfig.js中解开注释  "experimentalDecorators": true,   "emitDecoratorMetadata": true,  大概在 17。18行
// 装饰器(decorator)的主要作用是给一个已有的方法或类扩展一些新的行为，而不是去直接修改它本身。

// 装饰器：就是一个方法，可以注入到类，方法，属性参数上来拓展类，属性，方法，参数的功能
// 执行顺序 先从上至下，执行所有的装饰器工厂，拿到所有真正的装饰器，再从下到上的执行所有的装饰器
// 使用装饰器
// 类装饰器 （无法传参）

interface Position17 {
    x:number,
    y:number
}
const moveDecorator:ClassDecorator = (target:Function)=>{
    target.prototype.name = 'ding'
    console.log(target, 'target');
    target.prototype.getPosition = ():Position17 =>{
        return {x:100, y:100}
    }
    
}

@moveDecorator // 给Tank类进行了装饰，moveDecorator函数第一个参数就是Tank的构造函数。装饰器装饰自上到下装饰
class Tank {}

const t = new Tank()
const tRes = (t as any).getPosition()
console.log(tRes,'tRes');


@moveDecorator
class Player {}
const p = new Player()
console.log((p as any).getPosition(),'pRes');

// 装饰器工厂（可传参）

function fn1(target:any){
    console.log(target,'target-fn1');
    
}
function fn2(options:any){
    return function (target:any){
        target.prototype.name = options.name
        target.prototype.age = options.age
    }
}


@fn1
@fn2({
    name:'ding',
    age:24
})
class Fn {

}

let fn17 = new Fn()
// @ts-ignore
console.log(fn17.name,'fn17');

