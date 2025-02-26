import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import router from "./router";
import { MapsPlugin } from "@syncfusion/ej2-vue-maps";
import VeeValidatePlugin from "./includes/validation";

mapInit(Highcharts);

Highcharts.maps["myMapName"] = mapData;

createApp(App)
  .use(router)
  .use(MapsPlugin)
  .use(HighchartsVue)
  .use(VeeValidatePlugin)
  .mount("#app");
