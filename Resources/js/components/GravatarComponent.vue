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
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
