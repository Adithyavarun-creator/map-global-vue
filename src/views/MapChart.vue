<template>
  <div class="mt-10 mb-10 flex flex-col gap-3 items-center justify-center">
    <h1 class="text-3xl">This is a demo version of syncfusion</h1>
    <a
      href="https://ej2.syncfusion.com/vue/documentation/maps/getting-started"
      class="text-2xl text-blue-500 font-semibold"
      >View Docs</a
    >
  </div>

  <div class="width">
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <div align="center">
          <ejs-maps
            id="container"
            ref="maps"
            :load="load"
            :titleSettings="titleSettings"
            :zoomSettings="zoomSettings"
            :useGroupingSeparator="useGroupingSeparator"
            format="n"
          >
            <e-layers>
              <e-layer
                :shapeData="shapeData"
                :dataSource="dataSource"
                :shapeSettings="shapeSettings"
                :markerSettings="markerSettings"
              ></e-layer>
            </e-layers>
          </ejs-maps>

          <div id="template" style="display: none">
            <div class="toolback">
              <div class="listing2">
                <span style="text-align: center"> ${name} </span>
              </div>
              <hr
                style="
                  margin-top: 2px;
                  margin-bottom: 5px;
                  border: 0.5px solid #dddddd;
                "
              />
              <div>
                <span class="listing1">Country : </span
                ><span class="listing2">${Country}</span>
              </div>
              <div>
                <span class="listing1">Population : </span
                ><span class="listing2">${population}</span>
              </div>
            </div>
          </div>

          <!-- <div style="float: right; margin-right: 10px">
            Source:
            <a
              href="http://www.citymayors.com/statistics/largest-cities-population-125.html"
              target="_blank"
              >www.citymayors.com</a
            >
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="col-lg-3 property-section">
      <table
        id="property"
        title="Properties"
        style="width: 100%; margin-left: -10px"
      >
        <tbody>
          <tr style="height: 50px">
            <td>
              <div class="property-text">
                Bind markers shape from data source
              </div>
            </td>
            <td>
              <div
                style="margin-left: 30px; padding-top: 0px; margin-top: -7px"
              >
                <ejs-checkbox id="shape" :change="changeshape"></ejs-checkbox>
              </div>
            </td>
          </tr>
          <tr style="height: 100px">
            <td>
              <div class="property-text">
                Bind markers color from data source
              </div>
            </td>
            <td>
              <div
                style="margin-left: 30px; padding-top: 0px; margin-top: -7px"
              >
                <ejs-checkbox id="color" :change="changecolor"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Marker,
  MapsTooltip,
} from "@syncfusion/ej2-vue-maps";
import { topPopulation } from "../datas/markerlocation.js";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { worldMap } from "../datas/worldmap.js";

export default {
  components: {
    "ejs-maps": MapsComponent,
    "e-layers": LayersDirective,
    "e-layer": LayerDirective,
    "ejs-checkbox": CheckBoxComponent,
  },
  data: function () {
    return {
      useGroupingSeparator: true,
      zoomSettings: {
        enable: false,
      },
      titleSettings: {
        text: "",
        textStyle: {
          size: "16px",
          fontFamily: "Segoe UI",
        },
      },
      shapeData: worldMap,
      dataSource: topPopulation,
      shapeSettings: {
        fill: "#C3E6ED",
      },
      markerSettings: [
        {
          dataSource: topPopulation,
          visible: true,
          animationDuration: 0,
          shape: "Circle",
          fill: "white",
          width: 10,
          border: { width: 2, color: "#285255" },
          tooltipSettings: {
            template: "#template",
            visible: true,
            valuePath: "population",
          },
        },
      ],
    };
  },
  provide: {
    maps: [Marker, MapsTooltip],
  },
};
</script>

<style scoped>
.width {
  width: 100%;
}

.toolback {
  border-radius: 4px;
  border: 1px #abb9c6;
  background: rgba(53, 63, 76, 0.9);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 165px;
}
.listing1 {
  font-size: 13px;
  color: #cccccc;
}
.listing2 {
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
}
</style>
