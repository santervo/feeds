<template>
  <div class="uk-padding">
    <form @submit.prevent="submit()">
      <label class="uk-form-label">Url</label>
      <div class="uk-form-controls">
        <input type="text" class="uk-input" :class="{'uk-form-danger': errors && errors.url}" autofocus placeholder="Feed url" v-model="feed.url" />
        <div class="uk-text-small uk-text-danger" v-if="errors.url">
          {{ errors.url }}
        </div>
      </div>
      <div class="uk-margin-top">
        <button type="submit" class="uk-button uk-button-primary" :disabled="creating">
          Add
        </button>
        <div class="uk-margin-small-left" uk-spinner v-if="creating"></div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      feed: {
        url: ''
      },
      errors: {},
      creating: false
    }
  },
  methods: {
    submit() {
      this.creating = true
      this.$store.dispatch('addFeed', this.feed)
        .then(feed => this.$router.push({ name: 'feed', params: { feedId: feed.id }}))
        .catch(err => {
          const { errors } = err
          if (errors) {
            Vue.set(this, 'errors', errors)
          }
          this.creating = false
        })
    }
  }
}
</script>
