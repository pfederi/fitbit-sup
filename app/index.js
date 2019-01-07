import { Application } from "./lib/view";

import { ViewEnd } from "./views/end";
import { ViewExercise } from "./views/exercise";
import { ViewSelect } from "./views/select";
import analytics from "fitbit-google-analytics/app";

analytics.configure({
  tracking_id: "UA-120956-16"
})

class MultiScreenApp extends Application {
  screens = { ViewSelect, ViewExercise, ViewEnd };
}

MultiScreenApp.start("ViewSelect");
