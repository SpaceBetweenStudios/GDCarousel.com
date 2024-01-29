<template>
  <template v-if="!isPROD">
    <div class="container-fluid text-bg-danger text-center p-1">
      PREVIEW - DO NOT DISTRIBUTE THIS EXACT URL
    </div>
  </template>
  <div class="container-fluid text-bg-secondary mb-5">
    <div class="px-4 py-5 mb-3 text-center">
      <h1>Game Developer Carousel</h1>
      <div class="h4">The LeRoy King Carousel at Yerba Buena Center</div>
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
      <div class="col display-1 text-center rounded focus">
        🎮 🧑‍💻 🎠
      </div>
    </div>
    <StructuredData />
  </div>

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

    isPROD () {
      return import.meta.env.PROD
    },

  },

})
</script>

<style lang="scss">
.bg-photo-plaza-seg {
  background-image: url('/img/plaza-seg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .focus {
    background-color: rgba(0, 0, 0, .6);
    text-shadow: 0 0 1rem black;
  }
}
</style>
