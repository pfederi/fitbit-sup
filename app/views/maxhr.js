import * as utils from "../lib/utils";
import { Application, View, $at } from "../lib/view";
import { me } from "appbit";
import document from "document";
import * as weather from '../../modules/fitbit-weather/app'

let spinner = document.getElementById("spinner");

const $ = $at("#view-maxhr");

var windBearing = function(deg){
  if (deg>11.25 && deg<33.75){
    return "NNE";
  }else if (deg>33.75 && deg<56.25){
    return "ENE";
  }else if (deg>56.25 && deg<78.75){
    return "E";
  }else if (deg>78.75 && deg<101.25){
    return "ESE";
  }else if (deg>101.25 && deg<123.75){
    return "ESE";
  }else if (deg>123.75 && deg<146.25){
    return "SE";
  }else if (deg>146.25 && deg<168.75){
    return "SSE";
  }else if (deg>168.75 && deg<191.25){
    return "S";
  }else if (deg>191.25 && deg<213.75){
    return "SSW";
  }else if (deg>213.75 && deg<236.25){
    return "SW";
  }else if (deg>236.25 && deg<258.75){
    return "WSW";
  }else if (deg>258.75 && deg<281.25){
    return "W";
  }else if (deg>281.25 && deg<303.75){
    return "WNW";
  }else if (deg>303.75 && deg<326.25){
    return "NW";
  }else if (deg>326.25 && deg<348.75){
    return "NNW";
  }else{
    return "N";
  }
}

export class ViewMaxhr extends View {
  el = $();

  constructor() {
    this.btnBack = $("#btnBack");

    super();
  }

  handleBack = () => {
    Application.switchTo("ViewSelect");
  }

  handleKeypressBack = (evt) => {
    if (evt.key === "up") this.handleBack();
  }

  lblLocation = $("#lblLocation");
  lblUvIndex = $("#lblUvIndex");
  lblTemperature = $("#lblTemperature");
  lblTemperatureLowHigh = $("#lblTemperatureLowHigh");
  lblWindSpeed = $("#lblWindSpeed");
  lblWindBearing = $("#lblWindBearing");
  lblDescription = $("#lblDescription");

  onMount() {
    // Start the spinner
    spinner.state = "enabled";

    this.btnBack.addEventListener("click", this.handleBack);
    document.addEventListener("keypress", this.handleKeypressBack);

    weather.fetch(30 * 60 * 1000) // return the cached value if it is less than 30 minutes old
      .then(weather => {
          console.log(JSON.stringify(weather));
          spinner.state = "disabled";
          this.lblLocation.text = `Location: ${weather.location || 0}`;
          this.lblUvIndex.text = `UV Index: ${weather.uvIndex || 0}`;
          this.lblTemperature.text = Math.round(`${weather.temperatureC || 0}`*10)/10 + `°` ;
          this.lblTemperatureLowHigh.text = `min ` + Math.round(`${weather.temperatureLow || 0}`*10)/10 + `° max ` + Math.round(`${weather.temperatureHigh || 0}`*10)/10 + `°` ;
          this.lblWindSpeed.text = Math.round(`${weather.windSpeed || 0}`) ;
          this.lblWindBearing.text = `knt from ${windBearing(weather.windBearing || 0)}` ;
          this.lblDescription.text = `${weather.description || 0}` ;
        })
      .catch(error => console.log(JSON.stringify(error)))
  }

  onRender() {
  }

  onUnmount() {
    this.btnBack.removeEventListener("click", this.handleBack);
    document.removeEventListener("keypress", this.handleKeypressBack);
  }
}
//
// weather.fetch(0 * 60 * 1000) // return the cached value if it is less than 30 minutes old
//   .then(weather => console.log(JSON.stringify(weather)))
//   .catch(error => console.log(JSON.stringify(error)))
