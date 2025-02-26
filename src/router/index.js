//router
import { createRouter, createWebHashHistory } from "vue-router";
import MapChart from "../views/MapChart.vue";
import AmMapCharts from "../views/AmMapCharts.vue";
import MapSvg from "../views/MapSvg.vue";
import SyncMap from "../views/SyncMap.vue";
import AnimatedChart from "../views/AnimatedChart.vue";
import DottedMap from "../views/DottedMap.vue";
import DetailedMap from "../views/Detailed.vue";
import GeoImsMap from "../views/GeoImsMap.vue";
import Imsmap from "../views/Imsmap.vue";
import Forms from "../views/Forms.vue";

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
  {
    path: "/detailed",
    name: "detailed",
    component: DetailedMap,
  },
  {
    path: "/geoims",
    name: "geoims",
    component: GeoImsMap,
  },
  {
    path: "/imsmap",
    name: "imsmap",
    component: Imsmap,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "border-indigo-500",
  linkExactActiveClass: "border-indigo-700",
});

export default router;

//npm init vite vue3-forms
