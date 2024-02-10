<template>
  <template v-if="!isPROD || true">
    <div class="container-fluid text-bg-danger text-center p-1">
      PREVIEW - DO NOT DISTRIBUTE THIS EXACT URL
    </div>
  </template>
  <div class="container-fluid mb-5 bg-photo-plaza-seg">
    <div class="px-4 py-5 mb-3 text-center">
      <div class="display-1 mb-2" role="img"
        aria-label="The emoji icons of game controller, technologist, and carousel horse.">
        🎮 🧑‍💻 🎠
      </div>
      <h1>Game Developer Carousel</h1>
      <div class="h4">The LeRoy King Carousel at Yerba Buena Gardens</div>
      <div class="h3">Thursday, March 21, 2024</div>
      <div class="h4">11:00am - 6:00pm</div>
      <div class="lead">Free for all!</div>
    </div>
  </div>

  <div class="container">
    <RouterView />
  </div>

  <div class="container-fluid">
    <div class="row row-cols-auto justify-content-center bg-photo-plaza-seg px-4 py-5">
      <div class="col display-1 text-center" role="img"
        aria-label="The emoji icons of game controller, technologist, and carousel horse.">
        🎮 🧑‍💻 🎠
      </div>
    </div>
  </div>

  <StructuredData />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import StructuredData from '@/components/structured-data.vue'

export default defineComponent({
  name: 'app',

  components: {
    StructuredData,
  },

  computed: {

    isPROD() {
      return import.meta.env.PROD
    },

  },

})
</script>

<style lang="scss">
:root {
  --bs-font-sans-serif: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.bg-photo-plaza-seg {
  background-image: url('/img/plaza-seg-fade.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
