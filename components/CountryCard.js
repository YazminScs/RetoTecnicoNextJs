'use client';
import useStore from '@/stores/useStore';

const CountryCard = ({ country }) => {
    const { setSelectedCountry, toggleFavorite, isFavorite } = useStore();

    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow shadow-purple-700 cursor-pointer bg-white">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{country.name.common}</h3>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(country);
                    }}
                    className="text-2xl"
                >
                    {isFavorite(country.cca3) ? '💜' : '🤍'}
                </button>
            </div>

            <div
                onClick={() => setSelectedCountry(country)}
                className="space-y-2"
            >
                <img
                    src={country.flags.png}
                    alt={`Bandera de ${country.name.common}`}
                    className="w-full h-full md:h-48 object-cover rounded border-2 border-purple-950"
                />

                <div className="text-sm text-gray-600">
                    <p><strong>Región:</strong> {country.region}</p>
                    <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;