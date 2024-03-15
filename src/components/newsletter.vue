<template>
  <template v-if="isSuccess">
    <div class="text-center">
      <div class="text-success h2">
        Success!
      </div>
      <div>
        Thanks for signing up! You should get a confirmation email soon.
      </div>
    </div>
  </template>
  <template v-else>
    <form
      ref="theForm"
      class="needs-validation"
      novalidate
      autocomplete="on"
      @submit.prevent="onSubmit"
    >
      <h2>
        Newsletter for Reminders
      </h2>
      <div class="input-group">
        <div class="form-floating">
          <input
            id="bd-email"
            v-model="formEmail"
            type="email"
            class="form-control"
            autocomplete="email"
            required
            placeholder=""
            :disabled="loading"
          />
          <label for="bd-email" class="form-label">Enter your email</label>
        </div>
        <button
          class="btn btn-gdcarousel"
          type="submit"
          :disabled="loading"
        >
          Subscribe
        </button>
      </div>
      <template v-if="errorFromFetch">
        <div class="form-text text-danger">
          {{ errorFromFetch }}
        </div>
      </template>
      <div class="form-text">
        <a href="https://buttondown.email/refer/GDCarousel" target="_blank">Powered by Buttondown.</a>
      </div>
    </form>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Data {
  loading: boolean
  formEmail: string
  errorFromFetch: string | null
  isSuccess: boolean
}

export default defineComponent({
  name: 'comp-newsletter',

  setup () {
    const theForm = ref<HTMLFormElement>()

    return {
      theForm,
    }
  },

  data () : Data {
    return {
      loading: false,
      formEmail: '',
      errorFromFetch: null,
      isSuccess: false,
    }
  },

  methods: {
    onSubmit (event: Event) {
      this.loading = true
      this.errorFromFetch = null
      this.isSuccess = false
      this.theForm?.classList.add('was-validated')
      if (!this.theForm?.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        this.loading = false
        return
      } else if (this.theForm) {
        const formInfo = new FormData()
        formInfo.append('email', this.formEmail)
        fetch('https://buttondown.email/api/emails/embed-subscribe/GDCarousel', {
          method: 'POST',
          body: formInfo,
        })
          .then(async (results) => {
            if (results.ok) {
              this.isSuccess = true
              return Promise.resolve()
            } else {
              return results.text()
                .then((textOut) => {
                  return Promise.reject(textOut)
                })
                .catch((otherErr) => {
                  return Promise.reject(otherErr)
                })
            }
          })
          .catch((error) => {
            this.errorFromFetch = error
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  },

})
</script>
