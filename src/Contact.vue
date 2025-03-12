<template>
    <div class="contact-page">
      <div class="contact-content">
        <!-- Formulaire à gauche -->
        <div class="contact-form-container">
          <img src=https://cdn-icons-png.flaticon.com/512/4812/4812397.png class="envelope-icon">
          <h1>Contactez-nous</h1>
          <p>Votre satisfaction est primoridale ! N'hésitez pas à compléter le formulaire ci-dessous pour toute information.</p>
  
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nom :</label>
              <input type="text" id="name" v-model="form.name" placeholder="Votre nom" required />
            </div>
  
            <div class="form-group">
              <label for="email">Email :</label>
              <input type="email" id="email" v-model="form.email" placeholder="Votre email" required />
            </div>
  
            <div class="form-group">
              <label for="message">Message :</label>
              <textarea id="message" v-model="form.message" placeholder="Votre message" required></textarea>
            </div>
  
            <div class="form-group">
              <button type="submit" class="submit-button">Envoyer</button>
            </div>
          </form>
  
          <div v-if="submissionStatus" class="submission-status">
            <p>{{ submissionStatus }}</p>
          </div>
        </div>
  
        <!-- Première image à gauche du formulaire -->
        <div class="image-container">
          <img src="/collier9.jpg" alt="Image de contact" class="contact-image" />
        </div>
  
        <!-- Deuxième image à droite -->
        <div class="image-container-right">
          <img src="/tartaruga.jpg" alt="Deuxième image de contact" class="contact-image" />
        </div>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
        submissionStatus: '',
      };
    },
    methods: {
      submitForm() {
        // Simuler l'envoi du formulaire
        this.submissionStatus = 'Merci pour votre message ! Nous vous répondrons dès que possible.';
        
        // Réinitialiser le formulaire après envoi
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Modifié pour aligner l'élément vers le haut */
  padding: 40px;
  min-height: 100vh;
  margin-top: 110px;
  width: 100%; /* Prendre toute la largeur de l'écran */
  box-sizing: border-box;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px; /* Espacement entre les deux colonnes */
}

.contact-form-container {
  flex: 1; /* Prend une portion de l'espace disponible */
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  order: 2;
}

.contact-form-container h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.contact-form-container p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}
.envelope-icon {
  width: 300px;
  height: auto; /* Garde les proportions */
  display: center;
  margin-bottom:30px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  resize: vertical;
  height: 150px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #688d1d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.submission-status {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}

.image-container {
  flex: 1;
  order: 1;
}

.contact-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-container-right {
  flex: 1;
  order: 3;
}

.contact-image-right {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>