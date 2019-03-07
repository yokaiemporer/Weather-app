const request=require('request');
var geocodeAddress=(a,callback)=>
{
console.log(a);
var encodedString=encodeURIComponent(a);
request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=BPkAEpBKz4jIcUm1R9lWBouR9nwzAHju&location=${encodedString}`,
    json:true
},(error,response,body)=>{
    console.log(body.info.statuscode);
    if(error)
    {
      callback('Unable to connect to Google servers.');
    }
    else if(body.info.statuscode===400)
    {
      callback('Unable to find that address.');
    }
    // else if(body.info.statuscode===200)
    // {
      
      var results=body.results[0].locations[0];
callback(undefined,{
  Coordinate:results.latLng,
  Address:{a:results.adminArea5,
    b:results.adminArea5Type,
    c:results.adminArea3,
     d:results.adminArea3Type,
     e:results.adminArea1,
     f:results.adminArea1Type
}
});
      
    // console.log(JSON.stringify(error,undefined,2));
    // }
});
};
//api.forecast.io/forecast/apikey/latitude,longitude
//1c6d948a55e56801da2448f9aa0c8c3b
//https://api.darksky.net/forecast/1c6d948a55e56801da2448f9aa0c8c3b/17.456571,78.426876
module.exports=
{
  geocodeAddress
};