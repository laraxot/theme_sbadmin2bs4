<<<<<<< HEAD
<template>
    <v-snackbar
            :timeout="snackbarTimeout"
            :color="snackbarColor"
            v-model="snackbarShow"
            :multi-line="true"
    >
        {{ snackbarText }}<br/>
        {{ snackbarSubtext }}
        <v-btn dark flat @click.native="close">Close</v-btn>
    </v-snackbar>
</template>


<script>
  import { mapGetters } from 'vuex'
  import * as mutations from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'snackbarShow',
        'snackbarColor',
        'snackbarText',
        'snackbarSubtext',
        'snackbarTimeout'
      ])
    },
    methods: {
      close () {
        this.$store.commit(mutations.SET_SNACKBAR_SHOW, false)
      }
    }
  }
</script>

=======
<template>
    <v-snackbar
            :timeout="snackbarTimeout"
            :color="snackbarColor"
            v-model="snackbarShow"
            :multi-line="true"
    >
        {{ snackbarText }}<br/>
        {{ snackbarSubtext }}
        <v-btn dark flat @click.native="close">Close</v-btn>
    </v-snackbar>
</template>


<script>
  import { mapGetters } from 'vuex'
  import * as mutations from '../store/mutation-types'

  export default {
    computed: {
      ...mapGetters([
        'snackbarShow',
        'snackbarColor',
        'snackbarText',
        'snackbarSubtext',
        'snackbarTimeout'
      ])
    },
    methods: {
      close () {
        this.$store.commit(mutations.SET_SNACKBAR_SHOW, false)
      }
    }
  }
</script>

>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
