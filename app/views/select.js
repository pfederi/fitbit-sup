import { me } from "appbit";
import document from "document";

import * as config from "../config";
import { Application, View, $at } from "../lib/view";

const $ = $at("#view-select");

export class ViewSelect extends View {
  el = $();

  constructor() {
    this.btnStart = $("#btnStart");
    this.btnWeather = $("#btnWeather");
    this.btnMaxhr = $("#btnMaxhr");
    this.lblTitle = "SUP";

    super();
  }

  handleStart = () => {
    Application.switchTo("ViewExercise");
  }

  handleWeather = () => {
    Application.switchTo("ViewWeather");
  }

  handleMaxhr = () => {
    Application.switchTo("ViewMaxhr");
  }

  handleKeypress = (evt) => {
    if (evt.key === "down") this.handleStart();
  }

  handleKeypressWeather = (evt) => {
    if (evt.key === "up") this.handleWeather();
  }

  handleKeypressMaxhr = (evt) => {
    if (evt.key === "left") this.handleMaxhr();
  }

  onMount() {
    me.appTimeoutEnabled = false; // Disable timeout

    this.btnStart.addEventListener("click", this.handleStart);
    this.btnWeather.addEventListener("click", this.handleWeather);
    this.btnMaxhr.addEventListener("click", this.handleMaxhr);
    document.addEventListener("keypress", this.handleKeypress);
    document.addEventListener("keypress", this.handleKeypressWeather);
    document.addEventListener("keypress", this.handleKeypressMaxhr);
  }

  onRender() {
    this.lblTitle.text = config.exerciseType;
  }

  onUnmount() {
    this.btnStart.removeEventListener("click", this.handleStart);
    this.btnWeather.removeEventListener("click", this.handleWeather);
    this.btnMaxhr.addEventListener("click", this.handleMaxhr);
    document.removeEventListener("keypress", this.handleKeypress);
    document.removeEventListener("keypress", this.handleKeypressWeather);
    document.addEventListener("keypress", this.handleKeypressMaxhr);
  }
}
