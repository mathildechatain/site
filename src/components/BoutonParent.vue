<template>
  <v-container>
    <v-row align="center" justify="center"> <!-- Centre le bouton -->
      <v-col cols="18" sm="20" md="6"> <!-- Contrôle la largeur -->
        <v-btn 
          block 
          density="comfortable" 
          color="white"
          :href="link" 
          target="_blank"
          class="d-flex align-center pa-3"
        >
          <img :src="icon" width="24" height="24" class="mr-2"> 
          {{ text }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: "/instagram_icon.png"
  }
});
</script>
