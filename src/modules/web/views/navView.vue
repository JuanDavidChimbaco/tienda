<template>
  <v-tabs>
    <v-tab to="/home">
      Inicio
      <v-icon end icon="mdi-home"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/">
      Acerca
      <v-icon end icon="mdi-information"></v-icon>
    </v-tab>
    <v-tab>
      contactenos
      <v-icon end icon="mdi-email-newsletter"></v-icon>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/">
      Login
      <v-icon end icon="mdi-login"></v-icon>
    </v-tab>
    <v-tab to="/">
      Register
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
