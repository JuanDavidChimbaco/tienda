<template>
  <v-card class="px-5" max-width="420">
    <v-card-text>
      <div class="mb-3"></div>
        <p class="text-h4 font-weight-black text-orange">Iniciar Sesión</p>
        <v-text-field v-model="user" clearable label="Usuario" hide-details="auto" ></v-text-field>
      <div class="mt-3">
        <v-text-field v-model="password" clearable label="Contraseña" hide-details="auto" type="password" hint="ingrese contraseña para acceder"></v-text-field>
      </div>
      {{ user }}
      {{ password}}
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="light-blue-accent-4">Log In</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="blue-grey-darken-4" >Register</v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: '',
    password: '',
  }),
  methods:{
    
  }
};
</script>

<style>
p{
  text-align: center;
  text-shadow: 1px 1px 2px black;
}
</style>
