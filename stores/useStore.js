import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Estado
      countries: [],
      favorites: [],
      selectedCountry: null,
      filters: {
        search: '',
        region: '',
        minPopulation: '',
        maxPopulation: ''
      },
      
      // Actions
      setCountries: (countries) => set({ countries }),
      
      setFilters: (newFilters) => set({ 
        filters: { ...get().filters, ...newFilters } 
      }),
      
      setSelectedCountry: (country) => set({ selectedCountry: country }),
      
      toggleFavorite: (country) => {
        const { favorites } = get();
        const isFavorite = favorites.find(fav => fav.cca3 === country.cca3);
        
        let newFavorites;
        
        if (isFavorite) {
          newFavorites = favorites.filter(fav => fav.cca3 !== country.cca3);
        } else {
          newFavorites = [...favorites, country];
        }
        
        set({ favorites: newFavorites });
        
        // También guardamos en localStorage manualmente por si acaso
        if (typeof window !== 'undefined') {
          localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
        
        return newFavorites;
      },
      
      // Computed values
      getFilteredCountries: () => {
        const { countries, filters } = get();
        
        return countries.filter(country => {
          // Filtro por nombre
          if (filters.search && !country.name.common.toLowerCase().includes(filters.search.toLowerCase())) {
            return false;
          }
          
          // Filtro por región
          if (filters.region && country.region !== filters.region) {
            return false;
          }
          
          // Filtro por población
          if (filters.minPopulation && country.population < parseInt(filters.minPopulation)) {
            return false;
          }
          
          if (filters.maxPopulation && country.population > parseInt(filters.maxPopulation)) {
            return false;
          }
          
          return true;
        });
      },
      
      isFavorite: (cca3) => {
        return get().favorites.some(fav => fav.cca3 === cca3);
      },
      
      // Nueva función para cargar favoritos desde localStorage
      loadFavoritesFromStorage: () => {
        if (typeof window !== 'undefined') {
          try {
            const stored = localStorage.getItem('favorites');
            if (stored) {
              const parsedFavorites = JSON.parse(stored);
              set({ favorites: parsedFavorites });
              return parsedFavorites;
            }
          } catch (error) {
            console.error('Error loading favorites from localStorage:', error);
          }
        }
        return [];
      }
    }),
    {
      name: 'countries-store', // nombre para el localStorage
      partialize: (state) => ({ 
        favorites: state.favorites 
      }), // solo persistir favorites
    }
  )
);

export default useStore;