<template>
    <v-card>
      <v-card-title>Productos en el carrito</v-card-title>
      <v-card-text>
        <ul>
          <li v-for="producto in carrito" :key="producto.id">
            {{ producto.nombre }} - Precio: ${{ producto.precio }}
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      carrito: Array,
    },
  };
  </script>
  