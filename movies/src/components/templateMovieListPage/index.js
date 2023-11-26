import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import PaginationFooter from "../paginationFooter";

function MovieListPageTemplate({ movies, title, action }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
    setCurrentPage(1);
  };

  const itemsPerPage = 10;
  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = displayedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={currentMovies}></MovieList>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <PaginationFooter
          itemsPerPage={itemsPerPage}
          totalItems={displayedMovies.length}
          currentPage={currentPage}
          paginate={paginate}
        />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;