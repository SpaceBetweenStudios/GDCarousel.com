<template>
 <div class="gdcarousel-logo-animated user-select-none">
  <picture>
    <source type="image/webp" :srcset="ImgGDCarouselBaseWebp">
    <source type="image/png" :srcset="ImgGDCarouselBasePng">
    <img :src="ImgGDCarouselBasePng" class="gdcarousel-logo-animated-base user-select-none" alt="An outline of a carousel." />
  </picture>
  <div class="gdcarousel-logo-animated-figure figure-a user-select-none">
    <picture>
      <source type="image/webp" :srcset="ImgGDCarouselFigureWebp">
      <source type="image/png" :srcset="ImgGDCarouselFigurePng">
      <img :src="ImgGDCarouselFigurePng" class="img-fluid user-select-none" alt="An outline of a carousel figure in the shape of a horse." />
    </picture>
  </div>
  <div class="gdcarousel-logo-animated-figure figure-b user-select-none">
    <picture>
      <source type="image/webp" :srcset="ImgGDCarouselFigureWebp">
      <source type="image/png" :srcset="ImgGDCarouselFigurePng">
      <img :src="ImgGDCarouselFigurePng" class="img-fluid user-select-none" alt="An outline of a carousel figure in the shape of a horse." />
    </picture>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ImgGDCarouselBasePng from '@/assets/gdcarousel-icon-animate-base.png'
import ImgGDCarouselBaseWebp from '@/assets/gdcarousel-icon-animate-base.webp'
import ImgGDCarouselFigurePng from '@/assets/gdcarousel-icon-animate-figure.png'
import ImgGDCarouselFigureWebp from '@/assets/gdcarousel-icon-animate-figure.webp'

export default defineComponent({
  name: 'gdcarousel-logo-animated',

  setup () {
    return {
      ImgGDCarouselBasePng,
      ImgGDCarouselBaseWebp,
      ImgGDCarouselFigurePng,
      ImgGDCarouselFigureWebp,
    }
  },

})
</script>
