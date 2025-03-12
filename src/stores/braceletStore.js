import { defineStore } from 'pinia';
import { supabase } from '../../supabase';

export const useBraceletStore = defineStore('ListBracelets', {
  state: () => ({
    ListeBracelets: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchListeBracelets() {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await supabase.from('ListeBracelets').select('*');
        console.log("Données récupérées: ", data); // Ajoute un log pour vérifier les données
        if (error) throw error;
        this.ListeBracelets = data;
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

