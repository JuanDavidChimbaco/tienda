<template>
    <v-card class="mx-auto" max-width="800">
        <CommentForm :isAuthenticated="isAuthenticated" />
        <CommentList :comments="comments" />
    </v-card>
</template>
  
<script>
import CommentForm from './components/CommentForm.vue';
import CommentList from './components/CommentList.vue';

export default {
    components: {
        CommentForm,
        CommentList,
    },
    data() {
        return {
            isAuthenticated: false, //gestionar el estado de autenticación 
            comments: [
                
            ],
        };
    },
};
</script>
  