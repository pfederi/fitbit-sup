/*
 * Entry point for the companion app
 */
 import "fitbit-google-analytics/companion"
 import * as weather from '../modules/fitbit-weather/companion'

 weather.setup({ provider : weather.Providers.darksky, apiKey : '3aec0a95dd1d2baf3caf89ca6af74f1b' })

console.log("Companion code started");
