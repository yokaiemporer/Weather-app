var getUser=(id,callback,uzer)=>
{
    var user={
        id:id,
        name:'vikram'
    };
    setTimeout(()=>
    {
        callback(user);
    },1000); 
    var user={
        id:45,
        name:'vikewram'
    };
    uzer(user);
    var user={
        id:id,
        name:'vikram'
    };

};
getUser(31,(usery)=>
{
console.log(usery);
},(obj)=>
{
console.log(obj);
});