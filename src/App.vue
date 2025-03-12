
<template>
  <main>
    <header class="navbar">
      <router-link to="/">
        <h2>Atelier Margharita</h2>
      </router-link>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/colliers">Colliers</router-link>
        <router-link to="/bracelets">Bracelets</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <router-view />
  </main>
  <div>
    <Footer> </Footer>
  </div>
</template>

<script setup>import Footer from './components/Footer.vue';
</script>

<style scoped>

.navbar {
  background-color:rgba(255, 255, 255, 0.69); 
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px; /* Hauteur fixe */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

/* Liste des liens (menu horizontal) */
.navbar ul {
  list-style: none;
  padding: 0;
  margin: 20px;
  display: flex; 
  gap: 60px; /* Espacement entre les liens */
  justify-content: flex-end;
}

/* Liens du menu */
.navbar a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 30px;
  padding: 10px 15px;
  font-family: 'Futura';
}

/* Effet au survol */
.navbar a:hover {
  color: #93b393; 
}
body, html {
  margin: 0;
  padding: 0;
main {
  margin-top: 0px; /* Décalage sous le menu */
  text-align: center;
}

}</style>


