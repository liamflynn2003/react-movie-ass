import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterTrendingMoviesCard from "../filterTrendingMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function TrendingMovieListPageTemplate({ dailyMovies, weeklyMovies, title, action }) {
  const [timeframeFilter, setTimeframeFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
 
  const handleChange = (type, value) => {
    if (type === "name"){ 
      setNameFilter(value);
    }
    else{ 
      setTimeframeFilter(value);
  }
};

  let displayedMovies = timeframeFilter === "daily" ? dailyMovies : weeklyMovies;

  if (nameFilter) {
    displayedMovies = displayedMovies.filter(movie =>
      movie.title.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
  
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterTrendingMoviesCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          timeframeFilter={timeframeFilter}
        />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default TrendingMovieListPageTemplate;