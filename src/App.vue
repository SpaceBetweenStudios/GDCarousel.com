<template>
  <template v-if="!isPROD || true">
    <div class="container-fluid text-bg-danger text-center p-1">
      PREVIEW - DO NOT DISTRIBUTE THIS EXACT URL
    </div>
  </template>
  <div class="container">
    <div class="px-4 pt-3 pb-5 text-center">
      <div class="mb-2">
        <picture>
          <source type="image/webp" :srcset="ImgGDCarouselLogo">
          <source type="image/png" :srcset="ImgGDCarouselLogoPng">
          <img :src="ImgGDCarouselLogoPng" class="" alt="Game Developer Carousel Logo" :style="{height: '200px'}"/>
        </picture>
      </div>
      <h1 class="main-title"><span class="line-start">Game Developer</span> Carousel</h1>
      <div class="h4 text-info">The LeRoy King Carousel at Yerba Buena Gardens</div>
      <div class="h2">Thursday, March 21, 2024</div>
      <div class="h4">11:00am - 6:00pm</div>
      <div class="h2 fw-bold">Free for all!</div>
    </div>
  </div>

  <RouterView />

  <div class=" bg-photo-plaza-seg">
    <div class="container">
      <div class="row row-cols-1 justify-content-center gy-1 px-4 py-5">
        <div class="col display-2 text-center font-neoneon text-gdcarousel text-shadow">
          See you on the carousel!
        </div>
        <div class="col display-1 text-center" role="img"
          aria-label="The emoji icons of game controller, technologist, and carousel horse.">
          🎮 🧑‍💻 🎠
        </div>
      </div>
    </div>
  </div>

  <StructuredData />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ImgGDCarouselLogo from '@/assets/logo-draft-00.webp'
import ImgGDCarouselLogoPng from '@/assets/logo-draft-00.png'
import StructuredData from '@/components/structured-data.vue'

export default defineComponent({
  name: 'app',

  components: {
    StructuredData,
  },

  setup () {
    return {
      ImgGDCarouselLogo,
      ImgGDCarouselLogoPng,
    }
  },

  computed: {

    isPROD() {
      return import.meta.env.PROD && (window.location.origin.toLowerCase() === 'https://gdcarousel.com/')
    },

  },

})
</script>
