//  接口混入
interface Name16 {
    name:string
}

interface Age16 {
    age:number
}

interface Gender16 {
    gender:number
}

let a16:Name16 ={name :'ding'}
let b16:Age16 ={age :24}
let c16:Gender16 ={gender :1}

let obj16 = Object.assign({},a16,b16,c16)
console.log(obj16);


// class 的混入 todo---