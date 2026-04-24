import React from 'react'

export default function MovieCard({ show, getShowDetails }) {
  return (
     <div className="movie-card" onClick={() => getShowDetails(show.id)}>

      <img
        src={
          show.image
            ? show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt={show.name}
      />

      <h3>{show.name}</h3>

      <p>⭐ {show.rating.average || "N/A"}</p>

      <p>{show.premiered}</p>

    </div>
  )
}
