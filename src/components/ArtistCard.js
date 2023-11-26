import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtistCard({artist}) {
  //menggunakan variable artist sebagai props
  return (
    <Link to={`/artist/${artist.id}`}>
    <div className="track-wrapper">
    <div className="card-artist">
        <div className="image-title">
        <div className="card-track__image">
            <img src={artist.image} alt="track" />
        </div>
        <div className="card-track__info">
            <h2 className='artist-name'>{artist.name}</h2>
        </div>
        </div>
    </div>
    </div>
    </Link>
  )
}
