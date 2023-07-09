// 数据类型[]

let fa:number[] = [1,2,3]
let fc:string[][] = [['a'],['b']]

// Array<T> 泛型的定义方式

let fb:Array<string> = ['123','456']
let fbb:Array<Array<string>> = [['1']]

// interface定义对象数组
interface Name4 {
    name:string,
    age4?:number,
    id:number
}

const fName:Name4[] = [
    {name:'swk',id:2},
]


// 元组：固定数量不同类型的数组
 let arr4:[boolean,number,string] = [true, 1, 'ding']

 arr4.push(12)
 console.log(arr4);
//  倘若不想更改，在类型前加修饰符 readonly 
let arr5:readonly [boolean,number,string] = [true, 1, 'ding']