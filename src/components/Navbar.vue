<template>
  <div class="">
    <nav
      class="mt-24 flex justify-between items-center gap-10 font-semibold text-2xl"
    >
      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/syncfusion"
        class="button"
        >Syncfusion Map</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/svgmap"
        class="button"
        >Svg Map</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/syncmap"
        class="button"
        >Sync Map</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/animate"
        class="button"
        >Animated Map</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/dotted"
        class="button"
        >Dotted Map</RouterLink
      >
    </nav>
  </div>
</template>

<script setup></script>

<style></style>
