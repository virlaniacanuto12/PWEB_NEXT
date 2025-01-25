export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad', type = '', year = '' } = searchParams;
    const res = await fetch(
        `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&type=${type}&y=${year}`
    );
    const data = await res.json();

    return (
        <div>
            <form method="GET" style={{ marginBottom: '20px' }}>
                <label>
                    Título:
                    <input type="text" name="titleSearchKey" placeholder="Digite o título" />
                </label>
                <label>
                    Tipo:
                    <select name="type">
                        <option value="">Todos</option>
                        <option value="movie">Filme</option>
                        <option value="series">Série</option>
                        <option value="episode">Episódio</option>
                    </select>
                </label>
                <label>
                    Ano:
                    <input type="number" name="year" placeholder="Ano de Lançamento" />
                </label>
                <button type="submit">Buscar</button>
            </form>
            <div>
                {data.Search ? (
                    data.Search.map((movie) => (
                        <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            {movie.Poster !== 'N/A' ? (
                                <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '200px' }} />
                            ) : (
                                <p>Poster not available</p>
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
