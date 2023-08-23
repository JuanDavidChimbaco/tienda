<template>
  <v-tabs>
      <v-tab to="/home">
        Home
        <v-icon end icon="mdi-home"></v-icon>
      </v-tab>
      <v-tab to="/about">
        About
        <v-icon end icon="mdi-information"></v-icon>
      </v-tab>
  </v-tabs>
  <router-view />
</template>

<script setup>
//
</script>
