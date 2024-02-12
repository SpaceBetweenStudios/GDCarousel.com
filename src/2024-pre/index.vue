<template>

  <div class="bg-photo-steven-clark-figure">
    <div class="container-fluid mb-5 p-5">
      <div class="row justify-content-center align-items-center">
        <div class="col text-center">
          <p class="h2 text-gdcarousel">
            No cost. No catch. Everyone can ride.
          </p>
          <p class="fs-5 mb-1">
            During the Game Developer Conference, take a ride on a carousel for a moment of whimsy.
          </p>
          <p class="fs-5">
            Located next door to Moscone Center South building.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5">

    <div class="row row-cols-1 row-cols-sm-auto g-4 justify-content-sm-center">
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a :href="urlWebCal">
              <icon :icon="['far', 'calendar-check']" size="3x" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a :href="urlWebCal" class="fs-3">
              Subscribe to Calendar
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a :href="urlCal.href">
              <icon :icon="['far', 'calendar-plus']" size="3x" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a :href="urlCal.href" class="fs-3">
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a href="https://www.facebook.com/events/1079567859951253/" >
              <icon :icon="['fab', 'facebook']" size="3x" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a href="https://www.facebook.com/events/1079567859951253/"  class="fs-3">
              Facebook Event
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h2>
      Location:
    </h2>
    <div class="row g-3 my-3 justify-content-lg-center">
      <div class="col-12 col-lg-6">
        <p>
          The LeRoy King Carousel is located next door to Moscone South on the corner of Howard Street & 4th Street.
        </p>
        <address>
          221 4th St, San Francisco, CA 94103
        </address>
        <ul>
          <li>
            <a href="https://www.google.com/maps/search/?api=1&query=Leroy+King+Carousel+at+Children's+Creativity+Museum&query_place_id=ChIJt1SMQ4eAhYARsgwtv6TIX90"
              target="_blank">Google Maps</a>
          </li>
          <li>
            <a href="https://maps.apple.com/?address=221%204th%20St,%20San%20Francisco,%20CA%20%2094103,%20United%20States&auid=2312437926144756011&ll=37.783324,-122.402140&lsp=9902&q=Children%E2%80%99s%20Creativity%20Museum"
              target="_blank">Apple Maps</a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-8 order-lg-3">
        <img :src="ImgMapSvg" class="img-fluid" />
      </div>
      <div class="col-12 col-lg-6">
        <p>
          Stairless access is located:
        </p>
        <ul>
          <li>
            On the corner of 4th and Howard Streets, right of the steps.
          </li>
          <li>
            On Howard Street next to Moscone South.
          </li>
          <li>
            Via the skyway connecting to the Yerba Buena Main Lawn &amp; The Metreon.
          </li>
        </ul>
      </div>
    </div>

  </div>

  <div class="container">
    <FAQ />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ImgMapSvg from '@/assets/map-00.svg'
import FAQ from '@/2024-pre/faq.vue'

import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarCheck,
  faCalendarPlus,
} from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faFacebook,
  faCalendarCheck,
  faCalendarPlus,
)

export default defineComponent({
  name: '2024-pre',

  components: {
    FAQ,
  },

  setup () {
    const urlCal = new URL('gdcarousel.ics', window.location.origin)
    const urlWebCal = `webcal://${window.location.host}/gdcarousel.ics`

    return {
      urlCal,
      urlWebCal,
      ImgMapSvg,
    }
  },

})
</script>
