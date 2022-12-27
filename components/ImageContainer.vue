<template>
  <img :src="src" class="h-full object-contain" />
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
