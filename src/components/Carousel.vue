<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const items = [
    {
      src: '/bracelet2.jpg',
    },
    {
      src: '/collier10.jpg',
    },
    {
      src: '/collier7.jpg',
    },
    {
      src: '/cordao.jpg',
    },
  
   
  ]
</script>