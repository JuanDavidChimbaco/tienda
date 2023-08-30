<template>
  <v-sheet
    class="d-flex  justify-center flex-wrap text-center mx-auto px-3"
    elevation="0"
    height="auto"
    color="light-blue-accent-4"
    max-width="auto"
    width="100%"
  >
  <div class="banner1">
    <v-img height="300" src="@/assets/logo.png" />
  </div>
    <div class="banner">
      <h2 class="text-h4 font-weight-black text-orange shadows">
        Exotic Shoes &nbsp;
        <p class="text-body-2 text-black">
          Moda femenina y accesorios
        </p>
      </h2>
    </div>
    <div class="banner2">
      <div class="text-h5 font-weight-medium text-black">
        Tienda Online
      </div>

    </div>
  </v-sheet>
  <v-tabs elevation="12">
    <v-tab to="/home">
      Inicio
      <v-icon end icon="mdi-home"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/about">
      Acerca
      <v-icon end icon="mdi-information"></v-icon>
    </v-tab>
    <v-tab>
      contactenos
      <v-icon end icon="mdi-email-newsletter"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/login">
      Login
      <v-icon end icon="mdi-login"></v-icon>
    </v-tab>
    <v-tab to="/register">
      Register
      <v-icon end icon="mdi-account-plus"></v-icon>
    </v-tab>
  </v-tabs>
  <router-view />
</template>

<script setup>

</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

h2{
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px black;
}
.banner2{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
.banner1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 10vh;
}
</style>
```
