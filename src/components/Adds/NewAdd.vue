<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary md3">Create Add</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title add is required']"
            required
          ></v-text-field>
          <v-text-field
            name="description"
            label="Description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description add is required']"
            required
            multi-line
          ></v-text-field>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn
              class="warning"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" alt="" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Add to promo?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createAdd"
              :disabled="!valid"
            >
            Create Add
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'NewAdd',
      data () {
        return {
          title: '',
          description: '',
          promo: false,
          valid: false
        }
      },
      methods: {
        createAdd () {
          if (this.$refs.form.validate()) {
            const add = {
              title: this.title,
              description: this.description,
              promo: this.promo
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
