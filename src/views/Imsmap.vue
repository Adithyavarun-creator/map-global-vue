<template>
  <!-- <div class="h-40 -mt-6"></div> -->
  <div class="mt-10 mb-10 flex flex-col gap-3 items-center justify-center">
    <h1 class="text-3xl text-center">
      This is an animated world map where you can zoom in and click for indepth
      regions to know about more regions
    </h1>
    <a
      href="https://www.amcharts.com/demos/drill-down-to-countries/"
      target="_blank"
      class="text-2xl text-blue-500 font-semibold"
      >View Docs in website</a
    >
  </div>
</template>

<!-- Styles -->
<style scoped>
.chart {
  width: 100%;
  /* height: 300px; */
  /* border: 1px solid red; */
}
</style>

<script setup>
am5.ready(function () {
  var root = am5.Root.new("app");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "translateY",
      projection: am5map.geoMercator(),
    })
  );

  let polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      fill: am5.color(0x22ff55),
      stroke: am5.color(0xffffff),
      exclude: ["AQ"],
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    templateField: "polygonSettings",
  });

  polygonSeries.data.setAll([
    {
      id: "US",
      polygonSettings: {
        fill: am5.color(0xff3c38),
      },
    },
    {
      id: "CA",
      polygonSettings: {
        fill: am5.color(0xa23e48),
      },
    },
    {
      id: "MX",
      polygonSettings: {
        fill: am5.color(0xff8c42),
      },
    },
    {
      id: "BR",
      polygonSettings: {
        fill: am5.color(0x00755e),
      },
    },
    //antartica
    {
      id: "AQ",
      polygonSettings: {
        fill: am5.color(0x04e41b4),
      },
    },
    {
      id: "CL",
      polygonSettings: {
        fill: am5.color(0xb8d8be),
      },
    },
    {
      id: "KL",
      polygonSettings: {
        fill: am5.color(0x004000),
      },
    },
    {
      id: "KZ",
      polygonSettings: {
        fill: am5.color(0x0d98ba),
      },
    },
    {
      id: "GL",
      polygonSettings: {
        fill: am5.color(0x4f42b5),
      },
    },
    {
      id: "AR",
      polygonSettings: {
        fill: am5.color(0xa7e6d7),
      },
    },
    {
      id: "AU",
      polygonSettings: {
        fill: am5.color(0x0ffd9eb),
      },
    },
    {
      id: "ZA",
      polygonSettings: {
        fill: am5.color(0x00755e),
      },
    },
    //africa #1BA7CB
  ]);
});
</script>

<!-- export const defaultData = [
  {
    drillColor: "#C13664",
    continent: "North America",
    color: "#00B6B2",
  },
  {
    drillColor: "#9C3367",
    continent: "South America",
    color: "#5B616B",
  },
  {
    drillColor: "#80306A",
    continent: "Africa",
    color: "#1BA7CB",
  },
  {
    drillColor: "#622D6C",
    continent: "Europe",
    color: "#214885",
  },
  {
    drillColor: "#462A6D",
    continent: "Asia",
    color: "#214885",
  },
  {
    drillColor: "#2A2870",
    continent: "Australia",
    color: "#77AA2B",
  },
]; -->
