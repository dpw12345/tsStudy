function judgeType(type){
    if(typeof type !== 'object'){
        return typeof type
    }
    return Object.prototype.toString.call(type).replace(/^\[object (\S+)\]$/,'$1')
}

let result = judgeType([123])
console.log(result);