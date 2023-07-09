// 泛型  动态类型。参数不明确类型的时候使用泛型
// 语法：在函数名称后面/接口名称 添加 < >(尖括号)，尖括号中指定具体的类型，比如，此处的number

function ding11<T>(a:T,b:T):Array<T>{
    return [a,b]
}
const res11 = ding11(1,2)
console.log(res11);

type A11<T> = string|number|T

const str11:A11<string> = 'str'
const str111:A11<undefined> = undefined

// 给泛型默认类型
function add11<T = number,Y = string>(a:T,b:Y):Array<T|Y>{
    return [a,b]
}

const res111 = add11('ding',123)
console.log(res111);

// 在接口中使用泛型
interface Person11<T,Y,X> {
    name:T;
    age:Y;
    gender:X
}

const person11:Person11<string,number,boolean> = {
    name:'ding',
    age:24,
    gender:true
}






