<<<<<<< HEAD
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
=======
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
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
</script>