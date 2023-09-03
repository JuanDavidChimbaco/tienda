<template>
    <div>
        <v-card>
            <v-card-title>Comentarios</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(comment, index) in comments" :key="index">
                        <v-list-item-title>{{ comment.author }}</v-list-item-title>
                        <v-list-item-content>{{ comment.content }}</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>
  
<script>
export default {
    props: ['comment'],
};
</script>
  