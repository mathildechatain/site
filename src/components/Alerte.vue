<template>
  <v-alert
    v-model="showAlert"
    closable
    title="Nouvelle OFFRE SPECIALE pour l'arrivée du printemps !"
    text="Pour toute commande passée entre le 1er et 31 mars inclus, les frais de livraison vous seront offerts"
    variant="tonal"
    class="promo-alert"
    append-icon="mdi-close"
    
  ></v-alert>
</template>

<script setup>
import { ref } from 'vue';

const showAlert = ref(true); 
</script>

<style scoped>
.promo-alert {
  margin: 25px auto;
  max-width: 600px;
  text-align: center; 
  font-size: 15px;
}

/* Centrer le titre */
.promo-alert .v-alert-title {
  text-align: center;
  font-weight: bold; /* Optionnel pour un meilleur rendu */
}


.v-alert__close {
  color: black !important; /* Force une couleur visible */
  font-size: 20px !important; /* Agrandir la croix si nécessaire */
  opacity: 1 !important; /* S'assurer qu'elle est bien visible */
}

</style>
