<template>
    <div>
        <div>Movies category {{this.cat}}</div>
        <v-container v-if="loading">
            <div class="text-xs-center">
                <v-progress-circular
                        indeterminate
                        :size="40"
                        :width="8"
                        color="green">
                </v-progress-circular>
            </div>
        </v-container>
        <v-container v-else grid-list-xl>
            <v-layout wrap>
                <v-flex xs4
                        v-for="(item, index) in wholeResponse"
                        :key="index"
                        mb-2>
                    <v-card>
                        <v-img
                                :src="item.Poster"
                                aspect-ratio="1"
                        ></v-img>
                        <v-card-title primary-title>
                            <div>
                                <h2>{{item.Title}}</h2>
                                <div>Year: {{item.Year}}</div>
                                <div>Type: {{item.Type}}</div>
                                <div>IMDB-id: {{item.imdbID}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-btn text
                                   color="green"
                                   @click="singleMovie(item.imdbID)"
                            >View</v-btn>
                            <v-btn text
                                   color="green"
                                   @click="showMovieDetails(item.imdbID)"
                            >Detailes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

            <movie-details
                    :movieDetails="this.movieDetails"
                    :showDetails="this.showDetails"
                    v-on:toggle="toggleDetails()"
            ></movie-details>

            <!--<v-layout row wrap>
                <v-flex xs12>
                    <div class="text-xs-center">
                        <v-dialog v-model="showDetails"  width="500">
                            <v-card>
                                <v-card-title class="headline grey lighten-2" primary-title>
                                    Movie details
                                </v-card-title>
                                <v-card-text>
                                    <table style="width:100%" border="1" >
                                        <tr>
                                            <th>Source</th>
                                            <th>About</th>
                                        </tr>
                                        <tr>
                                            <td align="center">Title</td>
                                            <td align="center">{{movieDetails.Title}}</td>
                                        </tr>
                                    </table>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="showDetails = false">
                                        OK
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-flex>
            </v-layout>-->
        </v-container>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import MovieDetails from './MovieDetails'
    import axios from 'axios'
    export default {
        props:['cat'],
        components:{
            MovieDetails
        },
        data () {
            return {
                wholeResponse: [],
                loading: true,
                env: process.env,
                showDetails: false,
                movieDetails:[]
            }
        },

        methods: {
            singleMovie (id) {
                this.$router.push('/movie/' + id)
            },
            showMovieDetails (id) {
                axios
                    .get('&i=' + id)
                    .then(response => {
                        this.movieDetails = response.data
                        this.showDetails = true

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            toggleDetails(){
                this.showDetails = false
            }
        },
        mounted: function () {
            axios
                .get('&s=' + this.cat)
                .then(response => {
                    this.wholeResponse = response.data.Search
                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                })
        }


    }
</script>

<style scoped>
    .v-progress-circular{
        margin: 1rem
    }

</style>