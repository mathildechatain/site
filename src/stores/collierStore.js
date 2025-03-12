import { defineStore } from 'pinia';
import { supabase } from '../../supabase';

export const useCollierStore = defineStore('ListColliers', {
  state: () => ({
    ListeColliers: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchListeColliers() {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await supabase.from('ListeColliers').select('*');
        console.log("Données récupérées: ", data); // Ajoute un log pour vérifier les données
        if (error) throw error;
        this.ListeColliers = data;
      } catch (err) {
        this.error = err.message;
        console.error("Erreur lors de la récupération des données: ", err);
      } finally {
        this.loading = false;
      }
    }
    
    }
  }
);

