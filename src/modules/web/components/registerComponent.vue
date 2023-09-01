<template>
  <v-card class="mx-auto px-8 py-8" max-width="auto">
    <form>
      <v-container>
        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map(e => e.$message)"
          :counter="50"
          label="Nombre"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.lastname"
          :error-messages="v$.lastname.$errors.map(e => e.$message)"
          :counter="50"
          label="Apellido"
          required
          @input="v$.lastname.$touch"
          @blur="v$.lastname.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.username"
          :error-messages="v$.username.$errors.map(e => e.$message)"
          :counter="50"
          label="Usuario"
          required
          @input="v$.username.$touch"
          @blur="v$.username.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.email"
          :error-messages="v$.email.$errors.map(e => e.$message)"
          label="Correo"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>

        <v-select
          v-model="state.select"
          :items="items"
          :error-messages="v$.select.$errors.map(e => e.$message)"
          label="Item"
          required
          @change="v$.select.$touch"
          @blur="v$.select.$touch"
        ></v-select>

        <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map(e => e.$message)"
          label="I agree to site terms and conditions"
          required
          @change="v$.checkbox.$touch"
          @blur="v$.checkbox.$touch"
        ></v-checkbox>
      </v-container>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn class="me-4" @click="v$.$validate">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
        <v-btn @click="clear">
          clear
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const initialState = {
  name: "",
  username: "",
  lastname: "",
  email: "",
  select: null,
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const rules = {
  name: { required },
  username: { required },
  lastname: { required },
  email: { required, email },
  select: { required },
  items: { required },
  checkbox: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
