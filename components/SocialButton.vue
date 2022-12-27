<template>
  <div v-if="platform == 'twitter'">
    <a :href="'https://twitter.com/' + rel">
      <div
        class="
          w-12
          h-12
          rounded-full
          transition-shadow
          shadow-lg
          hover:shadow-md
          bg-blue-400
        "
      >
        <img
          class="container content-center transform scale-50"
          src="~/assets/icons/twitter.svg"
        />
      </div>
    </a>
  </div>
  <div v-else-if="platform == 'github'">
    <a :href="'https://github.com/' + rel">
      <div
        class="
          w-12
          h-12
          rounded-full
          transition-shadow
          shadow-lg
          hover:shadow-md
          bg-gray-900
        "
      >
        <img
          class="container content-center transform scale-75"
          src="~/assets/icons/github.svg"
        />
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    platform: {
      type: String,
      default: '',
    },
    rel: {
      type: String,
      default: '',
    },
  },
}
</script>
