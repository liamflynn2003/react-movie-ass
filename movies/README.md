# Assignment 1 - ReactJS app.

Name: [Liam Flynn]

## Overview.

[This repository contains the code for a React Web App which showcases information on movies using the TMDB API.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Trending Movies Page
+ Filter Trending Movies by Daily Trending or Weekly Trending
+ Search Trending Movies
+ Upcoming Movies Watchlist Icon
+ View Watchlist Page
+ Remove Movies from Watchlist
+ Search & Filter Watchlist
+ Top Rated Movies Page
+ Search &  Filter Top Rated Movies
+ Now Playing Movies Page
+ Similar Movies are displayed on Movie Details
+ Similar Movies can be clicked on to see their Details 
+ Pagination Footer

## Setup requirements.


## API endpoints.
+ Daily Trending Movies - /trending/movie/day
+ Weekly Trending Movies - /trending/movie/week
+ Top Rated Movies - /movie/top_rated
+ Now Playing Movies - /movie/now_playing
+ Similar Movies - /movie/${id}/similar

## Routing.

+ /movies/toprated - View top rated movies
+ /movies/nowPlaying - View movies currently in cinemas
+ /movies/trending - View trending movies
+ /movies/watchlist - View movies on your watchlist
+ /movies/${s.id} - View similar movie details 

## Independent learning (If relevant).

+New tmdb endpoints: https://developer.themoviedb.org/reference/intro/getting-started
        
+Pagination - 'Pagination in React', intelliPaat, 05 08 2023. Available at: https://www.themoviedb.org/talk/5bce078d9251410574000bfb (Accessed 20/11/2023)
Used in: movies\src\components\pagination\index.js, movies\src\components\paginationFooter\index.js, 
movies\src\components\templateMovieListPage\index.js,
movies\src\components\templateTrendingMovieListPage\index.js

Powered by Tutors App v9.0.0

Last commit af02f6a

South East Technological University
Deploys by Netlify
ReadMe
