'use client';
import { useEffect } from 'react';
import useStore from '@/stores/useStore';
import Filters from '@/components/Filters';
import CountryCard from '@/components/CountryCard';
import CountryModal from '@/components/CountryModal';

export default function Home() {
  const { countries, setCountries, getFilteredCountries } = useStore();
  const filteredCountries = getFilteredCountries();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital'
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [setCountries]);

  return (
    <main className="container mx-auto px-4 py-8">

      <Filters />

      <div className="mb-4">
        <p className="text-gray-600">
          Mostrando {filteredCountries.length} de {countries.length} países
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron países con los filtros aplicados</p>
        </div>
      )}

      <CountryModal />
    </main>
  );
}