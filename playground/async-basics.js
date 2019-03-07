console.log('starting app');

setTimeout(()=>{
console.log("inside  call back");
},0);
setTimeout(()=>{
    console.log("inside  call back two!");
},1);

    
console.log('finishing up');