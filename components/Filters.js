'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import useStore from '@/stores/useStore';
import { REGIONS } from '@/utils/constants';

const Filters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { filters, setFilters } = useStore();

    useEffect(() => {
        const urlFilters = {
            search: searchParams.get('search') || '',
            region: searchParams.get('region') || '',
            minPopulation: searchParams.get('minPopulation') || '',
            maxPopulation: searchParams.get('maxPopulation') || ''
        };
        setFilters(urlFilters);
    }, [searchParams, setFilters]);

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => {
            if (v) params.set(k, v);
        });

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
                <label className="block text-sm font-medium mb-1">Buscar país</label>
                <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Nombre del país"
                    className="w-full p-2 border rounded-md"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Región</label>
                <select
                    value={filters.region}
                    onChange={(e) => handleFilterChange('region', e.target.value)}
                    className="w-full p-2 border rounded-md"
                >
                    <option value="">Todas las regiones</option>
                    {REGIONS.map(region => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Población mínima</label>
                <input
                    type="number"
                    min="0"
                    value={filters.minPopulation}
                    onChange={(e) => handleFilterChange('minPopulation', e.target.value)}
                    placeholder="Ej: 1000000"
                    className="w-full p-2 border rounded-md"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Población máxima</label>
                <input
                    type="number"
                    min="0"
                    value={filters.maxPopulation}
                    onChange={(e) => handleFilterChange('maxPopulation', e.target.value)}
                    placeholder="Ej: 10000000"
                    className="w-full p-2 border rounded-md"
                />
            </div>
        </div>
    );
};

export default Filters;