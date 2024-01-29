<template>
  <div class="row justify-content-center align-items-center mb-5">
    <div class="col text-center">
      <p class="h2">
        No cost. No catch. Everyone can ride.
      </p>
      <p class="fs-5">
        Take a ride on a carousel for a moment of whimsy near the Moscone Center during the Game Developer Conference.
      </p>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 justify-content-between g-3 my-5">
    <div class="col text-center">
      <div class="mb-3">
        <icon :icon="['fab', 'facebook']" size="4x" />
      </div>
      <div class="fs-5">
        Facebook Event
      </div>
    </div>
    <div class="col text-center">
      <div class="mb-3">
        <a href="/gdcarousel.ics">
          <icon :icon="['far', 'calendar-plus']" size="4x" />
        </a>
      </div>
      <div>
        <div class="fs-5">
          <a href="/gdcarousel.ics">
            iCal File
          </a>
        </div>
        <div>
          (Google Calendar, Outlook, etc.)
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 my-3">
    <div class="col">
      <h2>
        Location:
      </h2>
      <p>
        The LaRoy King Carousel is located next door to Mascone South on the corner of Howard Street & 4th Street.
      </p>
      <p>
        Stair-less access is located on Howard Street level next to Mascone South or via the skyway connecting to the Yerba Buena Main Lawn &amp; Metron.
      </p>
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
  faCalendarPlus,
} from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faFacebook,
  faCalendarPlus,
)

export default defineComponent({
  name: '2024-pre',

  components: {
    FAQ,
  },
})
</script>
