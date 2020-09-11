import { Application } from "./lib/view";

import { ViewEnd } from "./views/end";
import { ViewExercise } from "./views/exercise";
import { ViewSelect } from "./views/select";
import { ViewWeather } from "./views/weather";
import { ViewMaxhr } from "./views/maxhr";
import analytics from "fitbit-google-analytics/app";

analytics.configure({
  tracking_id: "UA-120956-16"
})

class MultiScreenApp extends Application {
  screens = { ViewSelect, ViewExercise, ViewEnd, ViewWeather, ViewMaxhr};
}

MultiScreenApp.start("ViewSelect");

import document from "document";

let tumbler = document.getElementById("tumbler");

let selectedIndex = tumbler.value;
let selectedItem = tumbler.getElementById("item" + selectedIndex);
let selectedValue = selectedItem.getElementById("content").text;

console.log(`index: ${selectedIndex} :: value: ${selectedValue}`);

selectedItem.getElementById("content").text = "60";
