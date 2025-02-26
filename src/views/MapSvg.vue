<template>
  <div class="mt-16 flex flex-col justify-center items-center ml-20">
    <div class="mt-10 mb-10 flex flex-col gap-3 items-center justify-center">
      <h1 class="text-3xl">
        This is a basic svg of world map but has no hover effects
      </h1>
      <a
        href="https://www.amcharts.com/svg-maps/?map=world"
        target="_blank"
        class="text-2xl text-blue-500 font-semibold"
        >View Docs in website</a
      >
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/datas/worldHigh.svg" width="125" height="125" /> -->
    <SvgLook class="w-full h-[150vh]" />
    <!-- <LowSvg class="w-full h-[150vh]" /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SvgLook from "../datas/worldHigh.svg";
// import LowSvg from "../datas/worldLow.svg";

export default defineComponent({
  name: "svgmap",
  components: { SvgLook },

  setup() {
    return {
      SvgLook,
    };
  },
});
</script>
