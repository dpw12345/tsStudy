import AA from './14-namespace-a'
namespace B {
    export const a =2
    interface C14 {
        name:string,
        age:number
    }
    export const b:C14 = {
        name:'d14',
        age:25
    }
}
console.log(AA);

console.log(B.b);
