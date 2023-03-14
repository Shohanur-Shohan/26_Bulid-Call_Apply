function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        console.log(num);
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(2, 3, 4, 7, 12, 40);
console.log("result ="); //extra
console.log(result);
