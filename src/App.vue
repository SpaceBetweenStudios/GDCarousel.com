<template>
  <div class="px-4 py-5 my-5 text-center text-bg-secondary">
    <h1>Game Developer Carousel</h1>
    <div class="h4">The LeRoy King Carousel at Yerba Buena Center</div>
    <div class="h3">Thursday, March 21, 2024</div>
    <div class="h4">11:00am - 6:00pm</div>
    <div class="lead">Free for all!</div>
    <div class="row row-cols-1 mt-5">
      <div class="col display-1 text-center">
        🎮 🧑‍💻 🎠
      </div>
    </div>
  </div>

  <div class="container">

    <div class="row justify-content-center align-items-center mb-5">
      <div class="col">
        <p class="lead">
          No cost. No catch. Everyone can ride.
        </p>
        <p>
          The past few months… years… were rough for everyone. Take a ride on a carousel for a moment of whimsy while at
          the Game Developer Conference or just happen to be near the Moscone Center.
        </p>
      </div>
    </div>

    <div class="row row-cols-1 my-5">
      <div class="col">
        MAP TO WHERE THE CAROUSEL IS
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 gx-2 gy-3 my-5">
      <div class="col">
        EMAIL NEWSLETTER THINGY
      </div>
      <div class="col">
        EVENT LINKS &amp; CALENDAR FILES
      </div>
    </div>

    <div class="row row-cols-1 g-3 mb-5">
      <div class="col">
        <h3>
          Questions:
        </h3>
      </div>

      <div class="col">
        <div>
          <h4>
            Who's doing this?
          </h4>
          <p>
            <a href="https://seg.fyi/">John "Seg" Seggerson</a> is a former game developer and moved on to experience
            design and immersive entertainment. On Thursday March 21st, he will personally sponsor every ride of the LeRoy
            King Carousel on Thursday March 21st.
          </p>
        </div>
      </div>

      <div class="col">
        <div>
          <h4>
            Why is Seg doing this?
          </h4>
          <p>
            Three reasons, in order of importance:
          </p>
          <ul class="list-group list-group-flush list-group-numbered">
            <li class="list-group-item d-flex justify-content-start align-items-start">
              <div class="ms-2">
                <div class="fw-bold mb-2">
                  Whimsy
                </div>
                <p class="mb-1">
                  There is no other important goal than to give folks a moment of pure, uncomplicated fun.
                </p>
                <p class="mb-1">
                  As a member of <a href="https://semperexplorandum.com/" target="_blank">The Explorers Guild</a> Troupe
                  #001, Seg has a fond connection to the LeRoy Carousel with the annual Steeplechase exploration.
                </p>
                <p class="mb-0">
                  Having seen so many friends deal with the layoffs along with his own personal experience of the game
                  industry, Seg felt adding some whimsy to an otherwise abysmal time is desperately needed. While it will
                  not solve the problems of the video game industry, taking some time to remember joy and happiness will
                  hopefully help manage the future of the industry.
                </p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-start align-items-start">
              <div class="ms-2">
                <div class="fw-bold mb-2">
                  Visibility for the LeRoy King Carousel
                </div>
                <p class="mb-0">
                  Depending on the response from this year's whimsy, perhaps we can make this a new tradition? Sign up for
                  the email list to keep in touch.
                </p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-start align-items-start">
              <div class="ms-2">
                <div class="fw-bold mb-2">
                  Seg's Consulting in Immersive and Themed Entertainment for the Video Games Industry
                </div>
                <p class="mb-0">
                  Ok, one bit of self-promotion. Are you a major video game IP holder and plan to license to a theme
                  park or other immersive experience? I can assist in making sure your IP makes a great impression!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col">
        <h4>
          Who operates the carousel?
        </h4>
        <p>
          <a href="https://creativity.org/" target="_blank">The Children's Creativity Museum</a> owns and operates the
          <a href="https://creativity.org/carousel/" target="_blank">LeRoy King Carousel</a>. The museum operates the
          carousel at it's own discretion.
        </p>
      </div>

      <div class="col">
        <h4>
          How accessible is the carousel?
        </h4>
        <p>
          Everyone deserves to ride with dignity.
        </p>
        <p>
          Guests are able to transfer to either a figure or chariot (the fixed bench seats of a carousel) directly from
          their
          mobility assistance device using the carousal's assistance ramp. For more information, consult the
          carousal operator of your needs on the day of your ride.
        </p>
        <p>
          Guests may be any height to ride. Any person under the height requirement of 42 inches (106.5 cm) requires an
          adult chaperone.
        </p>
      </div>

      <div class="col">
        <h4>
          May I ride more than once?
        </h4>
        <p>
          Of course you can! You will need to exit and reenter the queue so that everyone can get a ride in.
        </p>
      </div>

      <div class="col">
        <h4>
          Is this run by a conference that's happening near by?
        </h4>
        <p>
          This project is not affiliated with any convention, conference, it's holding companies, etc. It's just some dude
          paying for free rides at a carousal and made a website to tell people.
        </p>
      </div>

    </div>

    <div class="row row-cols-1 my-5">
      <div class="col display-1 text-center">
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

})
</script>
