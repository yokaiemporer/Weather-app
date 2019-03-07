const request=require('request');
var getWeather=(latitude,longitude,callback)=>
{
request({
  url:`https://api.darksky.net/forecast/1c6d948a55e56801da2448f9aa0c8c3b/${latitude},${longitude}`,
  json:true

},(error,response,body)=>
{
  if(!error&&response.statusCode===200){
callback(undefined,{
    temperature:body.currently.temperature,
    apparentTemperature:body.currently.apparentTemperature
  })
}
  else
  {
 callback('Unable to connect to Forecast IO server.');
  }
});
};
module.exports=
{
    getWeather
};