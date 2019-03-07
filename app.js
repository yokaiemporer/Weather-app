
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
geocode.geocodeAddress(argv.address,(errorMessage,results)=>
{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else
  {
    weather.getWeather(results.Coordinate.lat,results.Coordinate.lng,(errorMessage,weatherResults)=>
    {
      if(errorMessage)
      {
        console.log(errorMessage);
      }
      else
      {
        console.log(`Address is: ${results.Address.a} ${results.Address.b} ${results.Address.c}${results.Address.d} ${results.Address.e} ${results.Address.f}`);
        // console.log(JSON.stringify(weatherResults,undefined,2));
        console.log(`It's currently ${weatherResults.temperature}. \nIt feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
// http://www.mapquestapi.com/geocoding/v1/address?key=BPkAEpBKz4jIcUm1R9lWBouR9nwzAHju&location=19147
});

