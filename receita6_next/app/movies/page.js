"use client";

import { useState } from 'react';

export default function Home() {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch(
            `http://www.omdbapi.com/?apikey=f1cbc41e&s=${query}&type=${type}&y=${year}`
        );
        const data = await res.json();

        if (data.Search) {
            setResults(data.Search);
        } else {
            setResults([]);
        }

        setIsLoading(false);
    };

    return (
        <div>
            {/* Formulário de pesquisa */}
            <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
                <label>
                    Título:
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Digite o título"
                    />
                </label>
                <label>
                    Tipo:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="movie">Filme</option>
                        <option value="series">Série</option>
                        <option value="episode">Episódio</option>
                    </select>
                </label>
                <label>
                    Ano:
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Ano de Lançamento"
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>

            {/* Exibição dos resultados da pesquisa */}
            <div>
                {isLoading ? (
                    <p>Carregando...</p>
                ) : results.length > 0 ? (
                    results.map((movie) => (
                        <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            {movie.Poster !== 'N/A' ? (
                                <img
                                    src={movie.Poster}
                                    alt={`${movie.Title} Poster`}
                                    style={{ width: '200px' }}
                                />
                            ) : (
                                <p>Poster não disponível</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado</p>
                )}
            </div>
        </div>
    );
}