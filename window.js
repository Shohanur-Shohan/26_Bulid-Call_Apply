var name = 'shohan';
function add(num1, num2){         //remove var & it will be global 
    window.sum = num1 + num2;        //also use window in
    console.log('name', name);  
    function double (num){
        return num * 2;
    }
    var total = double(40);
    return total;
    
}
var result = add(44, 55);
console.log('name', name);
console.log(result);

console.log(sum);  //outside call / to get 

//name error ..go to lib.dom.d.ts line 17878


