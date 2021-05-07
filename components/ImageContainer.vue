<template>
  <img :src="src" class="h-full object-contain" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '',
    },
  },
})
</script>
