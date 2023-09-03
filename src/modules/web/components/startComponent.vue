<template>
    <v-container fluid class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div v-if="productos.length === 0">
                <p>Cargando productos...</p>
            </div>
            <div v-else>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="(producto) in productosPaginados"
                        :key="producto.id">
                        <v-card class="mb-4 card-hover">
                            <v-img :src="urlbase+producto.foto" alt="Imagen del producto" height="200"></v-img>
                            <div class="pa-3">
                                <h3 class="mb-2">{{ producto.nombre }}</h3>
                                <p class="mb-2">{{ producto.descripcion }}</p>
                                <p class="mb-4">Precio: ${{ producto.precio }}</p>
                                <v-btn @click="agregarAlCarrito(producto)" color="warning" class="white--text">Agregar al
                                    carrito</v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-pagination v-model="paginaActual" :length="totalPaginas" @input="cambiarPagina" />
            </div>
        </v-responsive>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            productos: [],
            urlbase: "https://exoticshoes.pythonanywhere.com/",
            carrito: [],
            productosPorPagina: 8, // productos por página
            paginaActual: 1, // página actual
        };
    },
    computed: {
        totalPaginas() {
            return Math.ceil(this.productos.length / this.productosPorPagina);
        },
        productosPaginados() {
            const inicio = (this.paginaActual - 1) * this.productosPorPagina;
            const fin = this.paginaActual * this.productosPorPagina;
            return this.productos.slice(inicio, fin);
        },
    },
    methods: {
        agregarAlCarrito(producto) {
            this.carrito.push(producto);
        },
        cambiarPagina(pagina) {
            this.paginaActual = pagina;
        },
    },
    mounted() {
        axios
            .get("https://exoticshoes.pythonanywhere.com/productos/")
            .then((response) => {
                this.productos = response.data;
                console.log(this.productos);
            })
            .catch((error) => {
                console.error("Error al cargar productos:", error);
            });
    },
};
</script>

<style>
.card-hover:hover {
    transition: transform 0.2s ease;
    transform: translateY(-5px);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

.v-card {
    min-height: 400px;
}
</style>
