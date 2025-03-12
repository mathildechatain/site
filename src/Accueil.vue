<template>

  <v-parallax src="/collier4.jpg" height="1250" width="100%" contain></v-parallax>
  <Alerte></Alerte>

  <v-container>
    <v-row>
      <!-- Colonne 1  -->
      <v-col cols="12" md="4" class="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/3233/3233997.png" class="small-image">
        <h2 class="feature-title">Livraison rapide</h2>
        <p class="feature-text">
          Livraison en 3 jours ouvrables par la Poste (courrier suivi).
        </p>
      </v-col>

      <!-- Colonne 2  -->
      <v-col cols="12" md="4" class="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/865/865992.png" class="small-image">
        <h2 class="feature-title">Garantie fait main</h2>
        <p class="feature-text">
          Nos bijoux sont fabriqués à la main dans notre atelier du Sud de la France.
        </p>
      </v-col>

      <!-- Colonne 3  -->
      <v-col cols="12" md="4" class="feature">
        <img src=https://cdn-icons-png.flaticon.com/512/3313/3313896.png class="small-image">
        <h2 class="feature-title">Des tons solaires</h2>
        <p class="feature-text">
          Grâce aux inspirations que nous puisons dans les paysages méditerranéens.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- A propos de la Marque !-->
  <div class="container">
    <div class="left-column"> 
      <h3 class="feature-text">L'Atelier Margharita est né en janvier 2024.
S'inspirant des riches cultures italiennes et portugaises, Margharita imagine des créations vibrantes et chaleureuses, reflétant un univers empreint d'élégance et de soleil. Son ambition est de rendre ces bijoux accessibles, afin que chacune puisse se reconnaître dans cet univers et s'approprier ces pièces uniques.
Chaque bijou est confectionné à la main, avec des perles soigneusement assemblées dans le sud de la France. Pour garantir une qualité durable, toutes les finitions sont réalisées en acier inoxydable..</h3>
<BoutonParent 
      text="Suivez-nous sur Instagram" 
      link="https://www.instagram.com/ateliermargharita/" 
      icon="/instagram_icon.png" 
    />
<h2 class="feature-title">Margharita propose des bijoux colorés et un univers solaire pour faire vivre l'été toute l'année !</h2>
  
  </div>
    

    <div class="right-column">
  <Carousel></Carousel>
    </div>

      </div>
      <img src=/logomarque.jpg class="logo-image">
      <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/4240433-camomille-head-linear-icon-traitement-plante-fin-line-illustration-blooming-flower-contour-symbol-vector-isolated-outline-drawing-vectoriel.jpg" class="small-image">
      <h1  class="feature-title"> N'hésitez pas à nous contacter ! </h1>
        <h2>Nous nous ferons un plaisir d'échanger avec vous pour toute information complémentaire !  </h2>
        
        <BoutonParent 
  text="Nous contacter" 
  link="/contact" 
  icon="/contact.png" 
/>
      
<!-- Découvrir nos bijoux !-->
      <Cards></Cards>
  

</template>


<script setup>
import Alerte from './components/Alerte.vue';
import BoutonParent from './components/BoutonParent.vue';
import Cards from './components/Cards.vue';
import Carousel from './components/Carousel.vue';
</script>

<style scoped>
.feature-title {
  font-weight: bold;
  margin-top: 20px;
  text-align: center; 
}

.feature-text {
  color: #000000;
  font-family: 'Lora', serif;
  text-align: center; 
  font-weight: normal;
  margin-top: 30px;
  font-size: 25px;
}

.small-image {
  width: 50px; 
  height: 50px; /* Hauteur souhaitée */
}

.container {
display: flex;
justify-content: space-between;
gap: 30px;
padding-left: 10px; /* Ajouter un peu de marge à gauche pour la colonne de gauche */
padding-right: 10px;
}

.left-column {
flex: 1;
min-width: 250px;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-right: 0;
border: 2px solid #ccc; /* Couleur et épaisseur de la bordure */
border-radius: 8px; /* Coins arrondis */
padding: 15px; /* Espacement intérieur */
background-color: #f9f9f9;
max-height: 500px; /* Définit une hauteur maximale */
  overflow: auto;
}

.right-column {
flex: 1;
display: flex;
min-width: 250px;
justify-content: center;
align-items: flex-start;
margin-left: 0;
}
.v-container{
  margin-top : 70px;
  margin-bottom: 70px;
}
.logo-image {
  margin-top: 30px; /* Augmente l'espace au-dessus de l'image */
}

</style>
