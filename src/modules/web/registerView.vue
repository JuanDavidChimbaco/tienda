<template>
  <div class="container">
    <headerView />
    <navView />
    <div class="content">
      <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="auto">
      <div class="container-register">
        <registerComponent />
      </div>
    </v-parallax>
    </div>
    <footerView />
  </div>
</template>

<script>
import headerView from "./views/headerView.vue";
import navView from "./views/navView.vue";
import footerView from "./views/footerView.vue";
import registerComponent from '@/modules/web/components/registerComponent.vue'

export default {
  components: {
    headerView,
    navView,
    footerView,
    registerComponent
  },
}
</script>

<style scoped>
.container-register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
