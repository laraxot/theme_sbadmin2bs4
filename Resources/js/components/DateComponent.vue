<template>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
</template>

<script>
  export default {
    vuetify: new Vuetify(),
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
  }
</script>