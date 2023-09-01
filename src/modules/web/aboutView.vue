<template>
  <div class="container">
    <headerView />
    <navView />
    <div class="content">
      <aboutComponent />
    </div>
    <footerView />
  </div>
</template>

<script>
import headerView from "./views/headerView.vue";
import navView from "./views/navView.vue";
import footerView from "./views/footerView.vue";
import aboutComponent from "./components/aboutComponent.vue";

export default {
  components: {
    headerView,
    navView,
    footerView,
    aboutComponent
  },
}
</script>

<style scoped>

</style>
