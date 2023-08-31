<template>
    <headerView />
    <navView />
    <router-view></router-view>
    <footerView />
</template>

<script>
import headerView from "./views/headerView.vue";
import navView from "./views/navView.vue";
import footerView from "./views/footerView.vue";

  export default {
    components: {
      headerView,
      navView,
      footerView,
    },
  }
</script>

<style scoped>

</style>
