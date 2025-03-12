import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia';

import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './Accueil.vue';
import Colliers from './Colliers.vue';
import Bracelets from './Bracelets.vue';
import Contact from './Contact.vue';
import { createClient } from '@supabase/supabase-js';


const routes = [
{ path: '/', component: Accueil },
{ path: '/colliers', component: Colliers },
{ path: '/bracelets', component: Bracelets},
{path : '/contact', component : Contact},

];
const router = createRouter({
history: createWebHistory(),
routes,
});

const app = createApp(App);
app.use(router);


// Vuetif

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify);
    app.mount('#app');
app.use(createPinia())