<template>
  <div class="container">
    <headerView />
    <div class="nav-container">
      <navView />
    </div>
    <div class="content">
      <HelloWorld />
    </div>
    <footerView />
  </div>
</template>

<script>
import headerView from "./views/headerView.vue";
import navView from "./views/navView.vue";
import footerView from "./views/footerView.vue";
import HelloWorld from "./components/HelloWorld.vue";

  export default {
    components: {
      headerView,
      navView,
      footerView,
      HelloWorld
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
  background-color: white; /* Puedes ajustar el color de fondo según tus necesidades */
  z-index: 1; /* Asegura que el nav esté en el frente */
}

.content {
  flex: 1;
}

footer {
  flex-shrink: 0;
}
</style>
