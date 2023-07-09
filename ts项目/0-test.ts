
function tttt(options:{userName:string,userAge:number}){
    console.log(options);
    return function(target:any){
        console.log(target);
        target.prototype.userName = options.userName
        target.prototype.userAge = options.userAge
    }

}

@tttt({
    userName:'ding',
    userAge:24
})
class Test001 {

}

const tt = new Test001()
//@ts-ignore
console.log(tt.userName);
