import React from 'react'

export default function ArtistDetail({data}) {
  //menggunakan variable data sebagai props
  return (
    <>
    <div className="artist-wrapper">
    <img src={data.image} alt="artist" />
    <div className="artist-container">
        <h3>{data.name}</h3>
        <br />
        <p>{data.desc}</p>
    </div>
    </div>
    </>
  )
}
