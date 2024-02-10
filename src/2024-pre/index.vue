<template>
  <div class="row justify-content-center align-items-center mb-5">
    <div class="col text-center">
      <p class="h2">
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

  <div class="row row-cols-1 row-cols-sm-auto justify-content-around g-3 my-5">
    <div class="col text-center">
      <a href="/gdcarousel.ics">
        <div class="mb-3">
          <icon :icon="['far', 'calendar-check']" size="4x" />
        </div>
        <div>
          <div class="fs-5">
            iCal File
          </div>
          <div>
            (Google Calendar, Outlook, etc.)
          </div>
        </div>
      </a>
    </div>
    <div class="col text-center">
      <div>
        <a href="https://www.facebook.com/events/1079567859951253/" target="_blank">
          <div class="mb-3">
            <icon :icon="['fab', 'facebook']" size="4x" />
          </div>
          <div class="fs-5">
            Facebook Event
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 my-3">
    <div class="col">
      <h2>
        Location:
      </h2>
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
      <p>
        Stairless access is located:
      </p>
      <ul>
        <li>
          On Howard Street on street level next to Moscone South.
        </li>
        <li>
          Via the skyway connecting to the Yerba Buena Main Lawn &amp; The Metreon.
        </li>
      </ul>
    </div>
  </div>

  <FAQ />

  <div class="display-2 text-center mb-5">
    See you on the carousel!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import FAQ from '@/2024-pre/faq.vue'

import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarCheck,
} from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faFacebook,
  faCalendarCheck,
)

export default defineComponent({
  name: '2024-pre',

  components: {
    FAQ,
  },
})
</script>
