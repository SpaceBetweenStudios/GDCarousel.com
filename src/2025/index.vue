<template>
  <div class="bg-photo-steven-clark-figure">
    <div class="container mb-5 p-5">
      <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center gy-2 gx-5">
        <div class="col text-center">
          <p class="h2 text-gdcarousel text-shadow">
            No cost. No catch. Everyone can ride.
          </p>
          <p class="fs-5 text-shadow mb-1">
            During the Game Developer Conference, take a ride on a carousel for a moment of whimsy.
          </p>
          <p class="fs-5 text-shadow mb-1">
            Located next door to Moscone Center South building.
          </p>
          <div class="fs-2">
            🎮 🧑‍💻 🎠
          </div>
        </div>
        <!-- <div class="col">
          <div class="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/ukbMBcUCY2A?si=toCQoRn_y3pl11pl&cc_load_policy=1&controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <NewsletterForm />
  </div>

  <div class="container mb-5">
    <div class="row row-cols-1 row-cols-sm-auto g-4 justify-content-sm-center">
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              :href="urlWebCal"
              aria-label="Subscribe to Calendar"
            >
              <icon
                :icon="['far', 'calendar-check']"
                size="3x"
              />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              :href="urlWebCal"
              class="fs-3"
            >
              Subscribe to Calendar
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              :href="urlCal.href"
              aria-label="Add to Calendar"
            >
              <icon
                :icon="['far', 'calendar-plus']"
                size="3x"
              />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              :href="urlCal.href"
              class="fs-3"
            >
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://buttondown.email/GDCarousel/rss"
              target="_blank"
              aria-label="Facebook Event"
            >
              <icon
                :icon="['fas', 'square-rss']"
                size="3x"
              />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://buttondown.email/GDCarousel/rss"
              target="_blank"
              class="fs-3"
            >
              RSS Feed
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://www.facebook.com/events/3948312665440021/"
              target="_blank"
              aria-label="Facebook Event"
            >
              <icon
                :icon="['fab', 'facebook']"
                size="3x"
              />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://www.facebook.com/events/3948312665440021/"
              target="_blank"
              class="fs-3"
            >
              Facebook Event
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-sm-auto g-4 mt-2 fs-4 justify-content-sm-center">
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://bsky.app/profile/gdcarousel.com"
              aria-label="Bluesky"
            >
              <icon :icon="['fab', 'bluesky']" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://bsky.app/profile/gdcarousel.com"
              class="fs-4"
            >
              Bluesky
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://facebook.com/GDCarousel"
              aria-label="Facebook"
            >
              <icon :icon="['fab', 'facebook']" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://facebook.com/GDCarousel"
              class="fs-4"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://www.instagram.com/gdcarousel"
              aria-label="Instagram"
            >
              <icon :icon="['fab', 'instagram']" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://www.instagram.com/gdcarousel"
              class="fs-4"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <a
              href="https://www.threads.net/@gdcarousel"
              aria-label="Instagram"
            >
              <icon :icon="['fab', 'threads']" />
            </a>
          </div>
          <div class="flex-grow-1 ms-3">
            <a
              href="https://www.threads.net/@gdcarousel"
              class="fs-4"
            >
              Threads
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Leroy+King+Carousel+at+Children's+Creativity+Museum&query_place_id=ChIJt1SMQ4eAhYARsgwtv6TIX90"
              target="_blank"
            >Google Maps</a>
          </li>
          <li>
            <a
              href="https://maps.apple.com/?address=221%204th%20St,%20San%20Francisco,%20CA%20%2094103,%20United%20States&auid=2312437926144756011&ll=37.783324,-122.402140&lsp=9902&q=Children%E2%80%99s%20Creativity%20Museum"
              target="_blank"
            >Apple Maps</a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-8 order-lg-3">
        <img
          :src="ImgMapSvg"
          class="img-fluid"
          alt="Stylized map locating the LeRoy Carousel in relationship to the Moscone Center."
        >
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

import NewsletterForm from '@/components/newsletter.vue'
import FAQ from '@/2025/faq.vue'
import ImgMapSvg from '@/assets/map-00.svg'

import {
  faBluesky,
  faFacebook,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarCheck,
  faCalendarPlus,
} from '@fortawesome/free-regular-svg-icons'
import {
  faSquareRss
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faBluesky,
  faFacebook,
  faInstagram,
  faThreads,
  faCalendarCheck,
  faCalendarPlus,
  faSquareRss,
)

export default defineComponent({
  name: '2025Pre',

  components: {
    NewsletterForm,
    FAQ,
  },

  setup() {
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
