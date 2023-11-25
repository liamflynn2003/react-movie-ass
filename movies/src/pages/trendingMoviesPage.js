// TrendingMoviesPage.js
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import TrendingMovieListPageTemplate from '../components/templateTrendingMovieListPage';
import { getDailyTrendingMovies, getWeeklyTrendingMovies} from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TrendingMoviesPage = () => {

  const { data: dailyData, error: dailyError, isLoading: dailyIsLoading, isError: dailyIsError } = useQuery('discover', getDailyTrendingMovies);

  const { data: weeklyData, error: weeklyError, isLoading: weeklyIsLoading, isError: weeklyIsError } = useQuery('discoverWeekly', getWeeklyTrendingMovies); 

  console.log(dailyData);
  console.log(weeklyData);

  if (dailyIsLoading || weeklyIsLoading) {
    return <Spinner />;
  }

  if (dailyError || weeklyError) {
    return <h1>Error: {dailyError || weeklyError}</h1>;
  }

  if (dailyIsError || weeklyIsError) {
    return <Spinner />;
  }

  const dailyMovies = dailyData?.results || [];
  const weeklyMovies = weeklyData?.results || [];

  return (
    <TrendingMovieListPageTemplate
      title='Trending Movies'
      dailyMovies={dailyMovies}
      weeklyMovies={weeklyMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}/>
  );
};

export default TrendingMoviesPage;
