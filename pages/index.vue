<template>
  <div class="lg:flex">
    <aside class="w-full lg:h-screen lg:sticky top-0 overflow-hidden lg:w-1/3">
      <about-section :name="about.name" :about-text="about.aboutText" />
    </aside>
    <main class="w-full lg:w-2/3 py-6 lg:py-0 overflow-auto lg:px-6">
      <showcase-section />
    </main>
    <custom-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutSection from '~/components/AboutSection.vue'
import CustomFooter from '~/components/CustomFooter.vue'
import ShowcaseSection from '~/components/ShowcaseSection.vue'

const name: String = 'Winson Lam'
const aboutText: String = `
  Mobile Developer(Swift & Flutter) and an avid Hololive simp.
  Code for fun since 2017, code for food since 2020.
`
const aboutData = { name, aboutText }

export default Vue.extend({
  components: { AboutSection, ShowcaseSection, CustomFooter },
  data() {
    return {
      about: aboutData,
    }
  },
})
</script>
