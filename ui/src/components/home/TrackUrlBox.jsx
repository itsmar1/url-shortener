import React from "react";
import { Link } from "react-router-dom";



const TrackUrlBox = () => {
  return (
    <div className="trackbox text-center mx-auto">
      <h1>Want More? Track Short URL Clicks!</h1>
      <div className="mx-auto">
        <p className="text-center mx-auto">
          Your shortened URLs can be tracked by clicks. Track statistics for
          your business and projects by monitoring the number of hits from your
          URL with the click counter
        </p>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary text-xl shadow-lg">Track URL</button>
        </Link>
      </div>
    </div>
  );
};

export default TrackUrlBox;
