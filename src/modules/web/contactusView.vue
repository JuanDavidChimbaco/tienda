<template>
    <div class="container">
      <headerView />
      <navView />
      <div class="content">
        <ContactusComponent/>
      </div>
      <footerView />
    </div>
  </template>
  
  <script>
  import headerView from "./views/headerView.vue";
  import navView from "./views/navView.vue";
  import footerView from "./views/footerView.vue";
  import ContactusComponent from "./components/ContactusComponent.vue";
  
  export default {
    components: {
      headerView,
      navView,
      footerView,
      ContactusComponent,
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  