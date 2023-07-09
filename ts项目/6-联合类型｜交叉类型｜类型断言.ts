// 联合类型 ｜
let phone:number|string = 15105963668

// 交叉类型 & 类似extends

interface People {
    name:string;
    age:number
}

interface Man {
    gender:number
}

const ding = (man: People & Man):void=>{
    console.log(man);
}

ding({
    name:'ding',
    age:18,
    gender:1
})

// 类型断言 as ｜ <类型>变量  ：不建议常用类型断言，只是用来欺骗ts，不能滥用
function add6(num:number|string):void{
    // console.log((num as string).length);
    console.log((<string>num).length);
}
add6('123')