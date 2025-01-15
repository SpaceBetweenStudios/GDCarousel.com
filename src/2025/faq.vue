<template>
  <div class="row row-cols-1 g-3 mb-5">
    <div class="col">
      <h2>
        Questions:
      </h2>
    </div>

    <div class="col">
      <h3>
        Who's doing this?
      </h3>
      <div>
        <div class="text-center text-md-start my-3 my-md-0 float-md-end">
          <img
            :src="ImgSeg"
            class="rounded img-fluid px-4"
            :style="{ maxHeight: '450px' }"
            alt="John 'Seg' Seggerson with crossed arms looking at the camera."
          >
        </div>
        <p>
          I'm <a
            href="https://seg.fyi/"
            target="_blank"
          >John "Seg" Seggerson</a>, a former game developer and now an
          experience designer for immersive / themed entertainment. With a donation to the <a
            href="https://creativity.org/"
            target="_blank"
          >The Children's Creativity Museum</a>, I am sponsoring the
          operation of the <a
            href="https://creativity.org/carousel/"
            target="_blank"
          >LeRoy King Carousel</a> for the
          day.
        </p>
        <p>
          In my gaming career, I worked with 13 different franchises including Sam &amp; Max, Monkey Island, the
          Walking
          Dead, and Graham Annable's Grickle. After moving away from the game industry, I started a career in
          experience
          design and immersive theatre.
        </p>
        <p>
          I've worked with The Rathskeller Club, an immersive theatre venue located in the Mission district of San
          Francisco. Putting on numerous immersive theatre shows and experiences, I developed a process for safety and
          consent in immersive productions.
        </p>
        <p>
          In 2017 I co-produced a GDC party at the Rathskeller to introduce immersive productions to the video game
          industry. If you were invited to an undisclosed place in the Mission district of San Francisco and went down
          a
          wooden slide, then you know what I'm talking about. Since the slide is no more, this year's event is scaled
          down but in a much more accessible and public venue.
        </p>
        <p>
          I'll be there the whole day! Likely helping out with line management as I can't help but be a house manager
          and work line operations. I'll certainly be free to chat about immersive experiences, themed entertainment,
          and some free consulting.
        </p>
      </div>
    </div>

    <div class="col">
      <div>
        <h3>
          Why are you doing this, Seg?
        </h3>
        <p>
          Three reasons, in order of importance:
        </p>
        <ul class="list-group list-group-flush list-group-numbered">
          <li class="list-group-item d-flex justify-content-start align-items-start">
            <div class="ms-2">
              <div class="fw-bold mb-2">
                Whimsy
              </div>
              <p class="">
                To give everyone a moment of pure, uncomplicated fun.
              </p>
              <p class="mb-1">
                Having seen many friends deal with the layoffs recently and my own personal experience of the game
                industry, adding some whimsy to an otherwise abysmal time is desperately needed. This will not solve the
                problems plaguing the video game industry. But taking some time to remember joy and happiness will remind
                you that radical kindness can be a path forward and is in fact strategic and necessary.
              </p>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-start">
            <div class="ms-2">
              <div class="fw-bold mb-2">
                Visibility for the LeRoy King Carousel
              </div>
              <p class="mb-1">
                Depending on the response this year, perhaps we can make this a new tradition? Get in touch if you wish to
                help sponsor next year.
              </p>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-start">
            <div class="ms-2">
              <div class="fw-bold mb-2">
                Consulting in Immersive and Themed Entertainment for the Video Games Industry
              </div>
              <p>
                Ok, a little self-promotion, as a treat:
              </p>
              <p class="mb-1">
                Are you a major video game IP holder and plan to license to a theme park or other immersive experience? I
                can assist in making sure your IP makes a great impression. See me at the carousel or get in touch.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="col">
      <h3>
        Who operates the carousel?
      </h3>
      <div class="">
        <div class="text-center text-md-start my-3 my-md-0 float-md-end">
          <a
            href="https://creativity.org/"
            target="_blank"
          >
            <img
              :src="ImgCCM"
              class="img-fluid"
              alt="Children's Creativity Museum"
            >
          </a>
        </div>
        <div>
          <p>
            The carousel is now operated by Yerba Buena Gardens Conservancy. The <a
              href="https://creativity.org/"
              target="_blank"
            >Children's Creativity Museum</a> is currently subcontracted to provide ride operators.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <h3>
        How accessible is the carousel?
      </h3>
      <p class="lead">
        Everyone deserves to ride with dignity.
      </p>
      <p>
        Guests may be any height to ride. Any person under the height requirement of 42 inches (106.5 cm) requires an
        adult chaperone.
      </p>
      <p>
        Animals have a weight limit of 250 lbs. "Jumping" horses require riders to hoist themselves up.
      </p>
      <p>
        Chariots (fixed bench seats) are available and require a step up to access. Smaller chariots have a narrow
        openings to seating. Larger chariots have wider openings to seating, but riders must navigate past stationary
        animals on the outer ring.
      </p>
      <p>
        The carousel is capable of securing one mobility device per ride using an assistance ramp. This spot is adjacent
        to one of the smaller chariots and several "jumping" horses. Mobility devices would be on the ramp, at an incline.
      </p>
      <p>
        Consult with the carousel operator regarding your needs before you ride.
      </p>
    </div>

    <div class="col">
      <h3>
        May I ride more than once?
      </h3>
      <p>
        Of course you can! You will need to exit and reenter the queue.
      </p>
    </div>

    <div class="col">
      <h3>
        What's the carousel's history?
      </h3>
      <div class="row justify-content-between">
        <div class="col">
          <p>
            The LeRoy King is a carousel by <a
              href="https://en.wikipedia.org/wiki/Charles_I._D._Looff"
              target="_blank"
            >Charles I.D. Looff</a> and is one of over 40 carousels he created in his lifetime. He is
            credited for created the Coney Island style of carousel, characterized as flamboyant horses with jewels and
            gold or silver leaf.
          </p>
          <p>
            First commissioned to be installed at Steeplechase Park in San Francisco, the 1906 earthquake disrupted the
            planned installation. Instead, Looff later installed the carousel an amusement park he built in Seattle: <a
              href="https://www.historylink.org/File/1390"
              target="_blank"
            >Luna Park</a>. After a fire occurred at Luna
            Park in 1913, the undamaged carousel was relocated to <a
              href="https://www.sfchronicle.com/projects/2022/visuals/playland-at-the-beach/"
              target="_blank"
            >San
              Francisco's Playland at the Beach</a>.
          </p>
          <p>
            When Playland closed in 1972, it was sold to carousel collector and restorer <a
              href="https://carouselhistory.com/marianne-stevens-jan-1929-sept-2012/"
              target="_blank"
            >Marianne
              Stevens</a>. After storing the carousel in New Mexico for a few years, the carousel would operate from 1982
            to 1998 under lease to Shoreline Village in Long Beach, CA.
          </p>
          <p>
            In 1994, the City of San Francisco purchased the carousel and in the summer of 1998 returned to San Francisco
            at it's current location at Yerba Buena Gardens. In 2014, the carousel was refurbished and dedicated to San
            Francisco Redevelopment commissioner <a
              href="https://usfblogs.usfca.edu/sfchangemakers/2020/07/03/leroy-king/"
              target="_blank"
            >LeRoy King</a>.
          </p>
        </div>
      </div>
    </div>

    <div class="col">
      <h3>
        How do I contact you, Seg?
      </h3>
      <p>
        Reach me via email. At the risk of getting this email picked up by spam bots: seg [at] the domain of this website
      </p>
    </div>

    <div class="col">
      <h3>
        Who did that logo?
      </h3>
      <p>
        <a
          href="https://starrnoir.com/"
          target="_blank"
        >Starr Noir Design</a>. You can contact Starr on Gmail at StarrNoirDesign
      </p>
    </div>

    <div class="col">
      <h3>
        Other Important Notices:
      </h3>
      <p>
        This project is not affiliated with any convention, conference, it's holding companies, etc. It's just some dude
        paying for free rides at a carousel and then made a website to tell people about it.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ImgSeg from '@/assets/seg-headshot-00-900.webp'
import ImgCCM from '@/assets/CCM-Logo-Primary-Grey-4.webp'

export default defineComponent({
  name: '2025Faq',

  setup() {
    return {
      ImgSeg,
      ImgCCM,
    }
  },

})
</script>
