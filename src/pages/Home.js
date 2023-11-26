import React, {useEffect, useState} from 'react'
import axios from 'axios';
import TrackCard from '../components/TrackCard';
import ArtistCard from '../components/ArtistCard';
import "./Home.css";

export default function Home() {
  // deklarasi state
  const [data, setData] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      
      try {
        // ambil data dari API
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track?sortBy=likes&order=desc&page=1&limit=3");
        setData(result.data);
      } catch (error) {}
    }
    // panggil fungsi getData
    getData();
  }, []);

  useEffect(() => {
    const getArtist = async () => {
      try {
        // ambil data dari API
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/artist");
        setArtists(result.data);
      } catch (error) {}
    }
    // panggil fungsi getData
    getArtist();
  }, []);

  return (
    <div>
      <h1>Welcome To Music App</h1>
      <br />
      <h3>Top 3 Songs</h3>
      <br />
      <div className="musicbycategory-container">
        {/* looping data */}
        {data && data.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>
      <br />
      <h3>Top 3 Artists</h3>
      <br />
      <div className="musicbycategory-container">
        {/* looping data */}
        {artists && artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
      </div>
    </div>
  )
}
