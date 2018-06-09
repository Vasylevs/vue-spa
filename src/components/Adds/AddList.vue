<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1>{{name}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
    export default {
      name: 'AddList',
      data () {
        return {
          name: 'Add List'
        }
      }
    }
</script>

<style scoped>

</style>
