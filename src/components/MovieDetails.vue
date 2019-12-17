<template>
    <v-layout row wrap>
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
                                <tr>
                                    <td align="center">Genre</td>
                                    <td align="center">{{movieDetails.Genre}}</td>
                                </tr>
                                <tr>
                                    <td align="center">Actors</td>
                                    <td align="center">{{movieDetails.Actors}}</td>
                                </tr>
                                <tr>
                                    <td align="center">Language</td>
                                    <td align="center">{{movieDetails.Language}}</td>
                                </tr>
                                <tr>
                                    <td align="center">Plot</td>
                                    <td align="center">{{movieDetails.Plot}}</td>
                                </tr>
                            </table>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="$emit('toggle')">
                                OK
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "MovieDetailes",
        props:['movieDetails','showDetails'],
        data: function () {
            return{

            }
        },
        methods: {
            close(){
                this.closeWindow()
            }
        }

    }
</script>

<style scoped>

</style>