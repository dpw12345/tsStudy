// 泛型约束。在类型后+extends + 约束类型
// 添加泛型约束收缩类型，主要有以下两种方式：1、指定更加具体的类型 ，2、添加约束。
// 比如，将类型修改为Type[]（Type类型的数组），因为只要是数组就一定存在length属性，因此就可以访问了。
function id11<Type>(value: Type[]): Type[] {
    console.log(value.length)
    return value
}

interface ILength { length: number }

function id<Type extends ILength>(value: Type): Type {  
        //extends：满足后面指定类型的一个约束
    console.log(value.length)
    return value
}

id(['a','k'])
id({ length: 10, name: 'jack' })

// 错误演示：
// id(123)   数值没有length属性


interface Len11 {
    length:number,
    describe:string
}

function len11<T extends Len11>(a:T){
    console.log(a);
}
len11({length:11,describe:'s'})

// keyof关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型。 
// keyof 获取后面这个类型中所有键的一个集合/所有键名称的联合类型

interface Goods {
    price:number|string,
    name:string,
    quantity:number
}
// in 表示遍历 
type B13< T extends Goods> = {
    [Key in keyof T]?:T[Key]
}

type C13 = B13<Goods>

// ts泛型工具
// Partial. 用来构造（创建）一个类型，将Type的所有属性设置为可选
type D13 = Partial<Goods>
// Readonly 用来构造一个类型，将Type的所有属性都设置为readonly（只读）。
type E13 = Readonly<Goods>
// Pick<Type, Keys>. 从Type中选择一组属性来构造新类型 表示选择谁的属性 2、表示选择哪几个属性. 第二个类型变量传入的属性只能是第一个类型变量中存在的属性
type F13 = Pick<Goods,'quantity'|'price'>
// Record<Keys, Type>  构造一个对象类型，属性键为Keys，属性类型为Type。1、表示对象有哪些属性 2、表示对象属性的类型。
type H13 = Record<'a'|'b'|'c',string[]>