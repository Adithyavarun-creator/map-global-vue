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
        >Syncfusion Map (Paid)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/svgmap"
        class="button"
        >Svg Map (Free)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/syncmap"
        class="button"
        >Sync Map (Paid)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/animate"
        class="button"
        >Animated Map (Free)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/dotted"
        class="button"
        >Dotted Map (Free)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/detailed"
        class="button"
        >IMS World Map Detail (Free)</RouterLink
      >

      <RouterLink
        activeClass="border border-indigo-500 p-2"
        exactActiveClass="border border-indigo-700"
        to="/geoims"
        class="button"
        >GeoIMS Map Detail (Free)</RouterLink
      >
    </nav>
  </div>
</template>

<script setup></script>

<style></style>
