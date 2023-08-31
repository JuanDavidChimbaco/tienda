<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="auto">
  <div class="container">
    <loginComponent />
  </div>
  </v-parallax>
</template>

<script setup>
  import loginComponent from '@/components/loginComponent.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
