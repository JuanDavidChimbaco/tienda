<template>
  <div class="my-6">
    <h2 class="text-h4 font-weight-black text-orange mx-auto my-4 text-center">
      Iniciar Sesión
    </h2>

    <v-card class="mx-auto pa-12 pb-8" elevation="1" max-width="448" rounded="lg" color="grey-darken-4">
      <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

      <v-text-field density="compact" placeholder="Usuario" prepend-inner-icon="mdi-account-outline" variant="outlined"
        v-model="username" clearable></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña
        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">¿Olvidó
          su contraseña?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Digite su contraseña" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible" v-model="password" clearable></v-text-field>

      <v-card class="mb-4 carta" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption custom-text">Advertencia: Después de 3 intentos fallidos
          consecutivos de inicio de sesión, su cuenta se bloqueará temporalmente durante tres horas. Si debe iniciar
          sesión ahora, también puede hacer clic en "¿Olvidó su contraseña?" a continuación para restablecer la contraseña
          de inicio de sesión.</v-card-text>
      </v-card>

      <v-btn block class="mb-4" color="blue" size="large" variant="tonal"  @click="iniciarSesion">Iniciar</v-btn>

      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="/register" rel="noopener noreferrer" target="_blank">
          Registrarse Ahora
          <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
  data: () => ({
    visible: false,
    username: "",
    password: "",
  }),
  methods: {
    async iniciarSesion() {
      try {
        // Paso 1: Obtener el token CSRF
        const csrfToken = Cookies.get('csrftoken'); // Asegúrate de que 'csrftoken' sea el nombre correcto de la cookie.

        // Paso 2: Enviar solicitud de inicio de sesión
        const response = await axios.post('https://exoticshoes.pythonanywhere.com/inicioSesion/', {
          username: this.username,
          password: this.password,
        }, {
          headers: {
            'X-CSRFToken': csrfToken,
          },
        });

        // Procesar la respuesta del servidor aquí, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito.
        console.log('Respuesta del servidor:', response.data);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas.
      }
    },
  },
};
</script>

<style scoped>
.custom-text {
  color: #a09e9e !important;
}
.carta{
  background-color: #2c2c2c !important;
  min-height: fit-content;
}
h2 {
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px black;
}
</style>
