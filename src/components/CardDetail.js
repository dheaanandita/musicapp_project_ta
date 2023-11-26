import React from 'react'

export default function CardDetail({data}) {
  //menggunakan variable data sebagai props
  return (
    <>
    <div className="detail-wrapper">
    <img src={data.image} alt="track" />
    <div className="detail-container">
        <h4>Track Title:</h4>
        <p>{data.track}</p>
        <h4>Artist:</h4>
        <p>{data.artist}</p>
        <h4>Genre:</h4>
        <p>{data.genre}</p>
    </div>
    </div>
    </>
  )
}
