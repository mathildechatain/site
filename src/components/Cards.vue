<template>
  <div class="card-container">
    <!-- Première carte -->
    <div class="card" @click="goToPage('/colliers')">
      <img src="/Corrente pimente.avif" alt="Image 1" class="card-image" />
      <div class="card-overlay">
        <h2>Découvrir nos Colliers</h2>
      </div>
    </div>

    <!-- Deuxième carte -->
    <div class="card" @click="goToPage('/bracelets')">
      <img src="/bracelet1.jpg" alt="Image 2" class="card-image" />
      <div class="card-overlay">
        <h2>Découvrir nos Bracelets</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage = (path) => {
  router.push(path);
};
</script>

<style scoped>
/* Conteneur pour afficher les cartes côte à côte */
.card-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

/* Style de chaque carte */
.card {
  position: relative;
  width: 55%; /* Ajuste la largeur des cartes */
  height: 400px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

/* Image des cartes */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay pour le texte */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Effet sombre */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s ease-in-out;
}

.card:hover .card-overlay {
  background: rgba(0, 0, 0, 0.7);
}
</style>
