<template>
  <v-tabs>
    <v-tab to="/">
      Inicio
      <v-icon end icon="mdi-home"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/about">
      Acerca
      <v-icon end icon="mdi-information"></v-icon>
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
  </v-tabs>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
