<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My adds</h1>
        <v-card
          class="elevation-10 mb-3"
          v-for="add in myAdds"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="add.imageSrc"
                height="200px"
                :key="add.id"
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{add.title}}</h2>
                <p>{{add.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/add/'+add.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
    export default {
      name: 'AddList',
      computed: {
        myAdds () {
          return this.$store.getters.myAdds
        }
      }
    }
</script>

<style scoped>

</style>
