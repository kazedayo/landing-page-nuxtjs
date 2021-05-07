<template>
  <div class="px-8 md:px-16 py-8 md:py-16">
    <header class="flex-auto flex-col items-center">
      <img
        src="/images/profile.jpg"
        class="object-cover w-32 h-32 rounded-full shadow-lg"
        :alt="name"
      />
      <div>
        <h1 class="text-4xl leading-5 font-extrabold tracking-tight my-6">
          {{ name }}
        </h1>
        <div class="flex flex-row gap-3">
          <social-button platform="twitter" rel="kaze_hayashi97" />
          <social-button platform="github" rel="kazedayo" />
        </div>
      </div>
    </header>
    <main class="max-w-md">
      <section class="text-xl font-medium leading-normal py-7">
        <p>{{ aboutText }}</p>
      </section>
    </main>
    <img
      class="shadow-md"
      src="/images/hehe.svg"
      width="100px"
      height="100px"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialButton from './SocialButton.vue'
export default Vue.extend({
  components: { SocialButton },
  props: {
    name: {
      type: String,
      default: '',
    },
    aboutText: {
      type: String,
      default: '',
    },
  },
})
</script>
