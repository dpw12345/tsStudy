// 不定义类型的时候ts支持默认推论出变量类型
let str10 = '123' // 默认推论出 str10为string
// 类型别名 type + 名字
type s = typeof str10
let str101:s = '456'


interface ObjTypes {
    name:string
    age:number
}

type ss = keyof ObjTypes


type sss = ObjTypes[keyof ObjTypes]

let sss01:sss = 1
