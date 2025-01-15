<template>
  <div class="container">
    <div class="px-4 pt-3 pb-5 text-center">
      <div class="mb-2 row row-cols-auto justify-content-center">
        <div class="col">
          <LogoAnimated />
        </div>
      </div>
      <h1 class="main-title">
        <span class="line-start">Game Developer</span> Carousel
      </h1>
      <div class="h4 text-info">
        The LeRoy King Carousel at Yerba Buena Gardens
      </div>
      <div class="h2">
        Thursday, March 20, 2025
      </div>
      <div class="h4">
        10:00am - 6:00pm
      </div>
      <div class="h2 fw-bold">
        Free for all!
      </div>
    </div>
  </div>

  <RouterView />

  <div class="bg-photo-plaza-seg">
    <div class="container">
      <div class="row row-cols-1 justify-content-center gy-1 px-4 py-5">
        <div class="col display-2 text-center font-neoneon text-gdcarousel text-shadow">
          See you on the carousel!
        </div>
        <div
          class="col display-1 text-center"
          role="img"
          aria-label="The emoji icons of game controller, technologist, and carousel horse."
        >
          🎮 🧑‍💻 🎠
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ImgGDCarouselLogo from '@/assets/gdcarousel-icon-only.webp'
import ImgGDCarouselLogoPng from '@/assets/gdcarousel-icon-only.png'

import LogoAnimated from '@/components/logo-animated.vue'

export default defineComponent({
  name: 'App',

  components: {
    LogoAnimated,
  },

  setup() {
    return {
      ImgGDCarouselLogo,
      ImgGDCarouselLogoPng,
    }
  },

})
</script>
