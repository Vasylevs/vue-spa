<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="add in promoAdds"
              :src="add.imageSrc"
              :key="add.id"
            >
              <div class="carousel-link">
                <v-btn class="error" :to="'add/'+add.id">{{add.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="add in adds"
          :key="add.id"
        >
          <v-card>
            <v-card-media :src="add.imageSrc" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{add.title}}</h3>
                <div>{{add.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat>Open</v-btn>
              <v-btn raised color="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
      name: 'Home',
      computed: {
        promoAdds () {
          return this.$store.getters.promoAdds
        },
        adds () {
          return this.$store.getters.adds
        }
      }
    }
</script>

<style scoped>
  .carousel-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
