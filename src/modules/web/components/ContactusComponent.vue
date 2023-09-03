<template>
    <v-container fluid>
        <v-card >
            <v-row>
                <v-col cols="12" md="6" class="contact-image">
                    <img src="@/assets/img/tienda.jpg" alt="Contáctanos" width="400" height="300">
                </v-col>
                <v-col cols="12" md="6">
                    <div class="contact-content">
                        <h1 class="display-2">¡Conversemos!</h1>
                        <p class="subtitle-1">
                            Estamos aquí para ayudarte. ¿Tienes alguna pregunta, sugerencia o comentario? No dudes en
                            ponerte en contacto con nosotros.
                        </p>
                        <div class="contact-details">
                            <p class="body-1">
                                <strong>Teléfono:</strong> +123 456 789
                            </p>
                            <p class="body-1">
                                <strong>Correo Electrónico:</strong> info@mi-tienda.com
                            </p>
                            <p class="body-1">
                                <strong>Dirección:</strong> [Dirección de la Tienda]
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
  
<style scoped>
.contact-image {
    padding: 0;
    text-align: center;
    overflow: hidden;
}

.contact-content {
    padding: 2rem;
}

.contact-content h1 {
    color: #333;
    font-weight: 700;
    margin-bottom: 1rem;
}

.contact-content .subtitle-1 {
    color: #777;
    margin-bottom: 1.5rem;
}

.contact-details {
    margin-top: 2rem;
}

.contact-details p {
    color: #444;
    margin-bottom: 1rem;
}

.contact-details strong {
    font-weight: 700;
}
</style>
  