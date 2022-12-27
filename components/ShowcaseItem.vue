<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center space-x-2">
      <h2 class="text-xl font-medium">{{ title }}</h2>
      <github-link :repo="repo" />
    </div>
    <p class="text-gray-400">{{ description }}</p>
    <div class="flex flex-wrap overflow-hidden">
      <image-container :src="src" />
    </div>
  </div>
</template>

<script lang="ts">
import GithubLink from './GithubLink.vue'
import ImageContainer from './ImageContainer.vue'

export default {
  components: { GithubLink, ImageContainer },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    repo: {
      type: String,
      default: '',
    },
  },
}
</script>
