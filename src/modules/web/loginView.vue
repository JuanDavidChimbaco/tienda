<template>
  <div class="container">
    <headerView />
    <navView />
    <div class="content">
      <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="auto">
      <div class="container-login my-6">
        <loginComponent />
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
import loginComponent from '@/modules/web/components/loginComponent.vue'

export default {
  components: {
    headerView,
    navView,
    footerView,
    loginComponent
  },
}
</script>

<style scoped>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
