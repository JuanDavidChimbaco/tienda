<template>
  <v-container fluid>
    <v-card>
      <v-row>
        <v-col cols="12" md="6" class="about-image">
          <img src="@/assets/img/tienda.jpg" alt="Contáctanos" width="400" height="300">
        </v-col>
        <v-col cols="12" md="6">
          <div class="about-content">
            <h1 class="display-2">Descubre nuestra historia</h1>
            <p class="subtitle-1">
              En Exotic Shoes, creemos que la pasión y la innovación pueden transformar la forma en que compramos
              en línea. Desde nuestros humildes comienzos hasta convertirnos en tu destino de compras en línea favorito,
              aquí está nuestra historia.
            </p>
            <p class="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.about-image {
  padding: 0;
  text-align: center;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.about-content {
  padding: 2rem;
}

.about-content h1 {
  color: #333;
  font-weight: 700;
  margin-bottom: 1rem;
}

.about-content .subtitle-1 {
  color: #777;
  margin-bottom: 1.5rem;
}

.about-content .body-1 {
  color: #444;
}
</style>



<script>

export default {

}
</script>
