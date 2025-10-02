'use client';
import useStore from '@/stores/useStore';
import CountryCard from '@/components/CountryCard';
import CountryModal from '@/components/CountryModal';

export default function Favorites() {
    const { favorites } = useStore();

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Mis Países Favoritos</h1>

            {favorites.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No tienes países favoritos aún</p>
                    <a href="/" className="text-blue-500 hover:underline mt-2 inline-block">
                        Explorar países
                    </a>
                </div>
            ) : (
                <>
                    <div className="mb-4">
                        <p className="text-gray-600">
                            {favorites.length} país(es) favorito(s)
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favorites.map(country => (
                            <CountryCard key={country.cca3} country={country} />
                        ))}
                        <CountryModal />
                    </div>
                </>
            )}
        </main>
    );
}