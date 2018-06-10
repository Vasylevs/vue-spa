<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            src="https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary">Text</h1>
            <p>Text description</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'Add',
      data () {
        return {
        }
      }
    }
</script>

<style scoped>

</style>
