<template>
  <v-tabs class="nav-tabs">
    <v-tab to="/">
      Inicio
      <v-icon end icon="mdi-home"></v-icon>
    </v-tab>
    <v-tab>

    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/about">
      Acerca
      <v-icon end icon="mdi-information"></v-icon>
    </v-tab>
    <v-tab to="/contactus">
      Contact us
      <v-icon end icon="mdi-cellphone-marker"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/login">
      Iniciar Sesión
      <v-icon end icon="mdi-login"></v-icon>
    </v-tab>
    <v-tab to="/register">
      Registerse
      <v-icon end icon="mdi-account-plus"></v-icon>
    </v-tab>
    <v-tab to="/register">
      carrito
      <v-icon end icon="mdi-cart" color="#efb810"></v-icon>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.nav-tabs {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  height: 100%;
}
</style>
