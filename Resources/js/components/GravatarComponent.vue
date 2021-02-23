<<<<<<< HEAD
<template>
    <v-avatar class="mt-1 mb-1" :size="size" >
        <img :src="gravatarURL(user.email)" alt="avatar">
    </v-avatar>
</template>

<style>

</style>

<script>
  import interactsWithGravatar from './mixins/interactsWithGravatar'

  export default {
    name: 'Gravatar',
    mixins: [ interactsWithGravatar ],
    props: {
      user: {
        type: Object,
        required: true
      },
      size: {
        type: String,
        default: '100px'
      }
    }
  }
</script>
=======
<template>
    <v-avatar class="mt-1 mb-1" :size="size" >
        <img :src="gravatarURL(user.email)" alt="avatar">
    </v-avatar>
</template>

<style>

</style>

<script>
  import interactsWithGravatar from './mixins/interactsWithGravatar'

  export default {
    name: 'Gravatar',
    mixins: [ interactsWithGravatar ],
    props: {
      user: {
        type: Object,
        required: true
      },
      size: {
        type: String,
        default: '100px'
      }
    }
  }
</script>
>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
