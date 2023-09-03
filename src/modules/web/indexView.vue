<template>
  <div class="container">
    <headerView />
    <div class="nav-container">
      <navView />
    </div>
    <div class="">
      <CarouselComponent />
    </div>
    <div class="content">
      <startComponent />
    </div>
    <div class="content">
      <CommentViewVue/>
    </div>
    <footerView />
  </div>
</template>

<script>
import headerView from "./views/headerView.vue";
import navView from "./views/navView.vue";
import footerView from "./views/footerView.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import startComponent from "./components/startComponent.vue";
import CarouselComponent from "./components/CarouselComponent.vue";
import CommentViewVue from "./CommentView.vue";

export default {
  components: {
    headerView,
    navView,
    footerView,
    // HelloWorld,
    startComponent,
    CarouselComponent,
    CommentViewVue,
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-container {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}

.content {
  flex: 1;
}

footer {
  flex-shrink: 0;
}
</style>
