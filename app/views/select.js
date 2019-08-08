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
    this.lblTitle = "SUP";

    super();
  }

  handleStart = () => {
    Application.switchTo("ViewExercise");
  }

  handleWeather = () => {
    Application.switchTo("ViewWeather");
  }

  handleKeypress = (evt) => {
    if (evt.key === "down") this.handleStart();
  }

  handleKeypressWeather = (evt) => {
    if (evt.key === "down") this.handleWeather();
  }

  onMount() {
    me.appTimeoutEnabled = false; // Disable timeout

    this.btnStart.addEventListener("click", this.handleStart);
    this.btnWeather.addEventListener("click", this.handleWeather);
    document.addEventListener("keypress", this.handleKeypress);
    document.addEventListener("keypress", this.handleKeypressWeather);
  }

  onRender() {
    this.lblTitle.text = config.exerciseType;
  }

  onUnmount() {
    this.btnStart.removeEventListener("click", this.handleStart);
    this.btnWeather.removeEventListener("click", this.handleWeather);
    document.removeEventListener("keypress", this.handleKeypress);
    document.removeEventListener("keypress", this.handleKeypressWeather);
  }
}
