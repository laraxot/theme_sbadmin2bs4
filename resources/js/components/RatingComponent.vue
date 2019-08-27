<template>
  <div class="text-center">
    <v-rating
      v-model="rating"
      :length="length"
      :empty-icon="emptyIcon"
      :full-icon="fullIcon"
      :half-icon="halfIcon"
      :half-increments="halfIncrements"
      :hover="hover"
      :readonly="readonly"
      :size="size"
      :dense="dense"
      :color="color"
      :background-color="bgColor"
    ></v-rating>
    <div>
      <span class="caption text-uppercase">model:</span>
      <span class="font-weight-bold">
        {{ rating }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      emptyIcon: 'mdi-heart-outline',
      fullIcon: 'mdi-heart',
      halfIcon: 'mdi-heart-half-full',
      halfIncrements: false,
      hover: true,
      length: 5,
      rating: 2,
      readonly: false,
      size: 64,
      dense: false,
      color: 'red lighten-3',
      colors: [
        'primary',
        'warning',
        'green',
        'red',
        'blue',
        'error',
        'teal',
        'red lighten-3',
      ],
      bgColor: 'grey lighten-1',
      bgColors: [
        'grey lighten-2',
        'warning lighten-1',
        'green lighten-2',
        'red lighten-2',
        'grey',
        '#eee',
        'cyan lighten-2',
        'grey lighten-1',
      ],
    }),
  }
</script>