
function first(){
    console.log(2222);
}

console.log(1111);

console.log(3333);

setTimeout(function(){
    console.log("done");  //5000 milisecond
}, 5000); 

setTimeout( () => {
    console.log("small function"); // 0 milisecond matters
} , 0 )                           

setInterval(function() {
    console.log('2000 s later'); //setinterval never stops use ctrl+c
}, 2000 );

console.log(4444);