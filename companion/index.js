/*
 * Entry point for the companion app
 */
 import "fitbit-google-analytics/companion"
 import * as weather from '../modules/fitbit-weather/companion'

 weather.setup({ provider : weather.Providers.darksky, apiKey : 'insert darksky api' })

console.log("Companion code started");
