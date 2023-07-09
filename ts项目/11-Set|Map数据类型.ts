// Set 默认去重的数据结构
// add() has() delete() foreach
let num11 = [1,2,2,3,4,5,5]
let num1101 = [2,2,3,5,6,7,8]
 // 去重
 let newNum11:Set<number> = new Set(num11)

 console.log(newNum11,[...newNum11]);
 
 // 取交集
let numInterSection = new Set(
    [...newNum11].filter(v=>{
        return new Set(num1101).has(v)
    })
)
console.log(numInterSection);

//  取差集 属于A但是不属于B，叫A-B的差集
let differNum = new Set(
    [...newNum11].filter(v=>{
        return !new Set(num1101).has(v)
    })
)
console.log(differNum);

// Map 形似对象，但是key值可以是引用数据类型
let arr11 = [1,2,3]
let map11:Map<Array<number>,number> = new Map()
map11.set(arr11,12)
console.log(map11.get(arr11));


