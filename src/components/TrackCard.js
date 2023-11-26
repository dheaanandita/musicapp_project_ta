import React from 'react'
import { Link } from "react-router-dom";

export default function TrackCard({track}) {
  //menggunakan variable track sebagai props
  return (
    <Link to={`/detail/${track.id}`}>
      {/* link digunakan untuk routing ke halaman lain dengan params id */}
    <div className="track-wrapper">
    <div className="card-track">
        <div className="image-title">
        <div className="card-track__image">
            <img src={track.image} alt="track" />
        </div>
        <div className="card-track__info">
            <h2 className='track-title'>{track.track}</h2>
            <p className='artist-name'>{track.artist}</p>
        </div>
        </div>
        
        <div className="liked-icon">
          <h2 className='like-icon'>♥ {track.likes}</h2>
        </div>
    </div>
    </div>
    </Link>
  )
}
