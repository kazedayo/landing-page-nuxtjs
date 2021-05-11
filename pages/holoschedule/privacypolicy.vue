<template>
  <article class="container mx-auto">
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('policy').fetch()
    return {
      page,
    }
  },
})
</script>
