//router
import { createRouter, createWebHashHistory } from "vue-router";
import MapChart from "../views/MapChart.vue";
import AmMapCharts from "../views/AmMapCharts.vue";
import MapSvg from "../views/MapSvg.vue";
import SyncMap from "../views/SyncMap.vue";
import AnimatedChart from "../views/AnimatedChart.vue";
import DottedMap from "../views/DottedMap.vue";

const routes = [
  {
    path: "/syncfusion",
    name: "syncfusion",
    component: MapChart,
  },
  {
    path: "/amcharts",
    name: "amchartsmap",
    component: AmMapCharts,
  },
  {
    path: "/svgmap",
    name: "svgmap",
    component: MapSvg,
  },
  {
    path: "/syncmap",
    name: "syncmap",
    component: SyncMap,
  },
  {
    path: "/animate",
    name: "animate",
    component: AnimatedChart,
  },
  {
    path: "/dotted",
    name: "dotted",
    component: DottedMap,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
