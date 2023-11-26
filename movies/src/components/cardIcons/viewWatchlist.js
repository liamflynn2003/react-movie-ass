import React from "react";
import { Link } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";

const WatchlistIcon = ({ movie }) => {
  return (
    <Link
      to={`/movies/watchlist`}
      state={{
          movieId: movie.id,
      }}
    >
      <ScheduleIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WatchlistIcon;