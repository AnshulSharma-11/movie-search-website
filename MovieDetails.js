import React from 'react'

export default function MovieDetails({ show, setSelectedShow }) {
  return (
    <div className="details">

      <button onClick={() => setSelectedShow(null)}>Close</button>

      <h3>{show.name}</h3>

      <img
        src={
          show.image
            ? show.image.original
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={show.name}
      />

      <p><b>Language :</b> {show.language}</p>
      <p><b>Genres :</b> {show.genres.join(", ")}</p>
      <p><b>Status :</b> {show.status}</p>
      <p><b>Rating :</b> ⭐ {show.rating.average || "N/A"}</p>

      <p
        dangerouslySetInnerHTML={{ __html: show.summary }}
      ></p>

    </div>
  )
}
