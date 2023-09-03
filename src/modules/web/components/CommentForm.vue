<template>
    <v-card class="mx-auto" max-width="800">
        <h1 class="text-center">Deja un Comentario.</h1>
        <v-card-text>
            <v-form @submit.prevent="submitComment">
                <v-text-field v-model="comment.author" label="Nombre" required :disabled="!isAuthenticated"
                    ></v-text-field>
                <v-textarea v-model="comment.content" label="Comentario" required :disabled="!isAuthenticated"
                    ></v-textarea>
                <v-btn type="submit" color="primary" :disabled="!isAuthenticated">Enviar comentario</v-btn>
            </v-form>
            <v-alert v-if="!isAuthenticated">Debes estar registrado para comentar.</v-alert>
        </v-card-text>
    </v-card>
</template>
  
<script>
import CommentList from './CommentList.vue';
export default {
    components: {
        CommentList,
    },
    data() {
        return {
            comment: {
                author: '',
                content: '',
            },
        };
    },
    props: {
        isAuthenticated: Boolean, // Recibe el estado de autenticación del componente padre
    },
    methods: {
        submitComment() {
            // Validar si el usuario está autenticado antes de enviar el comentario
            if (this.isAuthenticated) {
                console.log('Comentario enviado:', this.comment);
                this.comment.author = '';
                this.comment.content = '';
            }
        },
    },
};
</script>
  