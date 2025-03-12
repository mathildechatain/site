<template>
  
  <div class="product-list" v-if="products.length > 0">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" alt="Image du produit" class="product-image" />
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} €</p>
      </div>
    </div>
  </div>
  <p v-else>Chargement des produits...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import supabase from '../../supabase'; // Importation de la configuration Supabase

const products = ref([]); // Tableau pour stocker les produits

// Fonction pour récupérer les produits depuis Supabase
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('ListeColliers') // Nom de la table
    .select('id, NomCollier, Prix, Image_url'); // Sélectionner les champs nécessaires

  if (error) {
    console.error('Erreur lors de la récupération des produits:', error.message);
    return;
  }

  console.log('Données récupérées:', data); // Pour voir ce qui est renvoyé

  // Vérification des données et ajout dans la variable reactive
  if (data && data.length > 0) {
    products.value = data.map(product => ({
      id: product.id,
      name: product.NomCollier, 
      price: product.Prix, 
      image: product.Image_url, 
    }));
  } else {
    console.log('Aucun produit trouvé dans la base de données');
  }
};

// Appel de la fonction pour charger les produits au montage du composant
onMounted(fetchProducts);
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); /* Augmenté à 350px */
  gap: 30px;
  margin-top: 150px;
  width: 100vw; /* Prend toute la largeur de l'écran */
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.product-card {
  width: 100%; /* Prend toute la place disponible */
  border: 1px solid #ddd;
  min-height: 550px;
  border-radius: 12px; /* Coins plus arrondis */
  overflow: hidden;
  text-align: center;
  background: white;
  padding: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Ombre plus marquée */
  transition: transform 0.2s ease-in-out, box-shadow 0.3s;
}

.product-card:hover {
  transform: scale(1.03); /* Légère animation au survol */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 600px; /* Augmenté pour des images plus grandes */
  object-fit: cover; /* Ajustement sans déformation */
  border-radius: 10px; /* Arrondi pour l'image */
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 1.4rem;
  font-weight: bold;
}


.product-info p {
  color: #333;
  font-weight: bold;
  font-size: 1.2rem; /* Prix plus visible */
}
</style>
