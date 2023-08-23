<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn href="#" min-width="164" rel="noopener noreferrer" variant="text">
            <v-icon icon="mdi-view-dashboard" size="large" start />Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="#"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
          >
            <v-icon icon="mdi-speedometer" size="large" start />Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn href="#" min-width="164" rel="noopener noreferrer" target="_blank" variant="text">
            <v-icon icon="mdi-account-group" size="large" start />Community
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select label="Selection city" :items="city"></v-select>
        </v-col>
        <v-col>
          <v-text-field clearable label="Nombre" prepend-icon="$vuetify"></v-text-field>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
import { ref } from "vue";
let city = ref([
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]);
</script>
