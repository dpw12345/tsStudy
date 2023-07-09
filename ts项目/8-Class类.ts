// class的基本用法 继承 和 类型约束 implements
// ts interface 定义类 使用关键字 implements   后面跟interface的名字多个用逗号隔开 继承还是用extends

interface A8 {
    readonly name:string
}
interface B8 {
    age:number
}
interface C8 {
    gender:number
}

class D8 {
    money:number
    constructor(){
        this.money = 10000
    }
}

class E8 extends D8 implements A8, B8, C8 {
    store:string
    constructor(){
        super()
        this.store = 'story'
        this.age = 24
        this.name = 'ding'
    }
    gender: number = 1
    age: number
    name: string
}
// class的修饰符 readonly private protected public
// 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
// 使用  private 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问
// 使用  protected 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
// 我们用static 定义的属性 不可以通过this 去访问 只能通过类名去调用
// super 原理
// 静态方法
// get set

