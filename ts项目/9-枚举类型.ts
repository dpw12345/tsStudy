// enum 调用方式同对象
// 枚举的作用是列举类型中包含的各个值，一般用它来管理多个相同系列的常量（即不能被修改的变量），
// 用于状态的判断。这是一种无序的数据结构，把键映射到值上，可以理解为编译时键固定的对象，访问键时，ts将检查指定的键是否存在
function setClass(type:number) :void{
    if(type === 0) {
        console.log('red');
    }else if(type === 1){
        console.log('green');
    }else if(type === 2){
        console.log('blue');
    }
}
setClass(0)

// 如果不给值，默认是从0，1，2排序下去
enum Color {
    red= 'red',
    green= 'green',
    blue= 'green'
}
console.log(Color.red);

// 
enum requestStatusCodes {
    error = '400',
    success = '200',
}
enum requestWrongCodes {
    missingParameter = 'A',
    wrongParameterType = 'B',
    invalidToken = 'C'
}

const handleWrongStatus = (status: string): void => {
  // 如果觉得 requestWrongCodes.missingParameter 太长了，也可以用以下方式：
  const { missingParameter, wrongParameterType, invalidToken, } = requestWrongCodes;
  console.log(missingParameter, wrongParameterType, invalidToken,'missingParameter, wrongParameterType, invalidToken');
  
  switch (status) {
    case missingParameter:
      // Do something...
      break;
    case wrongParameterType:
      // Do something...
      break;
    case invalidToken:
      // Do something...
      break;
    default:
      throw (new Error('No have wrong code!'));
  }
};

handleWrongStatus('A')