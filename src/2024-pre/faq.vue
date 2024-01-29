<template>
  <div class="row row-cols-1 g-3 mb-5">
    <div class="col">
      <h3>
        Questions:
      </h3>
    </div>

    <div class="col">
      <div class="row justify-content-between">
        <div class="col-12 col-sm-8">
          <h4>
            Who's doing this?
          </h4>
          <p>
            <a href="https://seg.fyi/" target="_blank">John "Seg" Seggerson</a> is a former game developer and moved on to experience
            design and immersive entertainment. On Thursday March 21st, he will personally sponsor every ride on the LeRoy
            King Carousel.
          </p>
        </div>
        <div class="col text-center text-sm-end">
          <div>
            <img src="@/assets/seg-headshot-00.jpg" class="rounded" :style="{ maxHeight: '450px' }" alt="John 'Seg' Seggerson with crossed arms looking at the camera." />
          </div>
        </div>
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
                To give folks a moment of pure, uncomplicated fun.
              </p>
              <!-- <p class="mb-1">
                As a member of <a href="https://semperexplorandum.com/" target="_blank">The Explorers Guild</a> Troupe
                #001, Seg has a fond connection to the LeRoy Carousel with the annual Steeplechase exploration.
              </p> -->
              <p class="mb-0">
                Having seen so many friends deal with the layoffs, along with his own personal experience of the game industry, Seg felt adding some whimsy to an otherwise abysmal time is desperately needed. While this will not solve the problems plaguing the video game industry, taking some time to remember joy and happiness will hopefully remind folks that radical kindness can be a path forward.
              </p>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-start">
            <div class="ms-2">
              <div class="fw-bold mb-2">
                Visibility for the LeRoy King Carousel
              </div>
              <p class="mb-0">
                Depending on the response from this year's whimsy, perhaps we can make this a new tradition? Get in touch if you wish to help sponsor next year.
              </p>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-start">
            <div class="ms-2">
              <div class="fw-bold mb-2">
                Seg's Consulting in Immersive and Themed Entertainment for the Video Games Industry
              </div>
              <p class="mb-0">
                Ok, a little self-promotion: Are you a major video game IP holder and plan to license to a theme park or other immersive experience? I can assist in making sure your IP makes a great impression. See me at the carousel or get in touch.
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
      <div class="row justify-content-between">
        <div class="col">
          <p>
            <a href="https://creativity.org/" target="_blank">The Children's Creativity Museum</a> owns and operates the
            <a href="https://creativity.org/carousel/" target="_blank">LeRoy King Carousel</a>. The museum operates the
            carousel at it's own discretion.
          </p>
        </div>
        <div class="col-auto">
          <a href="https://creativity.org/" target="_blank">
            <img src="@/assets/CCM-Logo-Primary-Grey-4.webp" class="" />
          </a>
        </div>
      </div>
    </div>

    <div class="col">
      <h4>
        How accessible is the carousel?
      </h4>
      <p class="lead">
        Everyone deserves to ride with dignity.
      </p>
      <p>
        Guests may be any height to ride. Any person under the height requirement of 42 inches (106.5 cm) requires an
        adult chaperone.
      </p>
      <p>
        Guests are able to transfer to a figure or chariot (fixed bench seats) from their mobility device using the carousel's assistance ramp. Guests can also stay on certain mobility devices without needing to transfer.
      </p>
      <p>
        Consult with the carousel operator of your needs before you ride.
      </p>
    </div>

    <div class="col">
      <h4>
        May I ride more than once?
      </h4>
      <p>
        Of course you can! You will need to exit and reenter the queue.
      </p>
    </div>

    <div class="col">
      <h4>
        Other Important Notices:
      </h4>
      <p>
        This project is not affiliated with any convention, conference, it's holding companies, etc. It's just some dude paying for free rides at a carousel and then made a website to tell people about it.
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '2024-faq',
})
</script>
