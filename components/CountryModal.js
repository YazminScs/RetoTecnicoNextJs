'use client';
import useStore from '@/stores/useStore';

const CountryModal = () => {
    const { selectedCountry, setSelectedCountry, toggleFavorite, isFavorite } = useStore();

    if (!selectedCountry) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold">{selectedCountry.name.common}</h2>
                        <button
                            onClick={() => setSelectedCountry(null)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <img
                        src={selectedCountry.flags.png}
                        alt={`Bandera de ${selectedCountry.name.common}`}
                        className="w-full h-full object-cover rounded mb-4 border-2 border-purple-950"
                    />

                    <div className="space-y-2 text-sm">
                        <p><strong>Nombre oficial:</strong> {selectedCountry.name.official}</p>
                        <p><strong>Capital:</strong> {selectedCountry.capital?.[0] || 'N/A'}</p>
                        <p><strong>Región:</strong> {selectedCountry.region}</p>
                        <p><strong>Población:</strong> {selectedCountry.population.toLocaleString()}</p>
                        <p><strong>Código:</strong> {selectedCountry.cca3}</p>
                    </div>

                    <button
                        onClick={() => toggleFavorite(selectedCountry)}
                        className="mt-4 w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-400"
                    >
                        {isFavorite(selectedCountry.cca3) ? '💜 Quitar de favoritos' : '🤍 Agregar a favoritos'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountryModal;