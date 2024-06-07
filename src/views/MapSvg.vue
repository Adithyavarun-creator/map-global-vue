<template>
  <div class="mt-16 flex justify-center items-center ml-20">
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
