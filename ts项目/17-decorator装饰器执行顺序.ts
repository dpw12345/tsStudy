// 执行顺序 先从上至下，执行所有的装饰器工厂，拿到所有真正的装饰器，再从下到上的执行所有的装饰器

function fna1(target:any){
    target.prototype.name = 'ding'
    console.log('fna1');
    
}
// 装饰器工厂，可传参数
function fna2(options:{name:string,age:number}){
    console.log('fna2');
    return function(target:any){
        console.log('fna2-inside');
        options.name = target.name
        options.age = target.age
    }
}
function fna4(target:any){
    console.log('fna4');
    target.prototype.lastName = 'wen'
}


@fna1
@fna2({
    name:'pei',
    age:24
})
@fna4
class Fna {

}

const fna = new Fna()
console.log((fna as any).name);

// fna2
// fna4
// fna2-inside
// fna1
// ding


// 属性装饰器

function fnP17(options:any){
    return function(target:any,attr:any){
        target[attr] = options
    }
}


class Person17 {
    //@ts-ignore
    @fnP17('wen')
    // @ts-ignore
    userName:string
}

let p17 = new Person17()
console.log(p17.userName);


// 方法装饰器

function test (target:any,properKey:string,descriptor:PropertyDecorator){
    console.log(target);
    console.log(properKey);
    console.log(descriptor);
}
class Person171 {
    //@ts-ignore
    @test
    sayName(){
        return 'say name...'
    }
}

const p117 = new Person171()
p117.sayName()
