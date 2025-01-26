"use client";

import React, { useState, useCallback } from "react"; // Certifique-se de incluir "React" aqui

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const handleAction = useCallback(async (formData) => {
    const titleSearchKey = formData.get("titleSearchKey");
    setSearchKey(titleSearchKey);

    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
    );
    const jsonRes = await httpRes.json();
    setResultMovies(jsonRes.Search || []);
  }, []);

  console.log("Home renderizado");

  return (
    <div className="p-4">
      <MemoizedMovieForm handleAction={handleAction} searchKey={searchKey} />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

function MovieForm({ handleAction, searchKey }) {
  console.log("MovieForm renderizado");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleAction(formData);
      }}
      className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md shadow-md"
    >
      <label htmlFor="idTitleSearchKey" className="font-semibold">
        Título
      </label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        defaultValue={searchKey}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Pesquisar
      </button>
    </form>
  );
}

// Memoization do MovieForm para evitar re-renderizações
const MemoizedMovieForm = React.memo(MovieForm);

function MovieTable({ movies }) {
  console.log("MovieTable renderizado");

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Resultados da pesquisa:</h2>
      <div className="grid grid-cols-1 gap-4">
        {movies.map((m) => (
          <div
            key={m.imdbID}
            className="border p-4 rounded-md shadow-md flex flex-col items-start"
          >
            <h3 className="font-semibold">{m.Title}</h3>
            <p className="text-sm text-gray-600">{m.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


