import exercise from "exercise";

import * as utils from "../lib/utils";
import { View, $at } from "../lib/view";
import Clock from "../subviews/clock";
import { me } from "appbit";
import document from "document";

const $ = $at("#view-end");

let mybutton = document.getElementById("mybutton");
mybutton.onclick = function(e) {
  me.exit() ;
}

export class ViewEnd extends View {
  el = $();

  lblActiveTime = $("#lblActiveTime");
  lblHeartRateAvg = $("#lblHeartRateAvg");
  lblHeartRateMax = $("#lblHeartRateMax");
  lblSpeedAvg = $("#lblSpeedAvg");
  lblSpeedMax = $("#lblSpeedMax");
  lblSteps = $("#lblSteps");
  lblDistance = $("#lblDistance");

  onMount() {
    this.clock = new Clock("#subview-clock2", "seconds");
    this.insert(this.clock);

    this.lblActiveTime.text = `${utils.formatActiveTime(
      exercise.stats.activeTime || 0
    )}`;

    this.lblHeartRateAvg.text = `Ø ${exercise.stats.heartRate
      .average || 0} bpm`;
    this.lblHeartRateMax.text = `max ${exercise.stats.heartRate
      .max || 0} bpm`;

    const speedAvg = utils.formatSpeed(exercise.stats.speedAvg || 0);
    this.lblSpeedAvg.text = `Ø ${speedAvg.value} ${speedAvg.units}`;

    const speedMax = utils.formatSpeed(exercise.stats.speedMax || 0);
    this.lblSpeedMax.text = `max ${speedMax.value} ${speedMax.units}`;
    
    this.lblSteps.text = `${utils.formatSteps(
      exercise.stats.steps || 0
    )}`;

    const distance = utils.formatDistance(exercise.stats.distance || 0);
    this.lblDistance.text = `${distance.value} ${distance.units}`;
  }

  onRender() {}

  onUnmount() {}
}