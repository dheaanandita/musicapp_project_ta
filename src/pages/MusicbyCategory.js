import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TrackCard from '../components/TrackCard';
import "./MusicbyCategory.css";

export default function MusicbyCategory() {
    // deklarasi state
    // route: /categories/:genre
    // ambil variable genre yang ada di route dengan useParams
    const [data, setData] = useState([]);
    const {genre} = useParams('');

    useEffect (() => {
        const getData = async () => {            
            try {
                // ambil data dari API
                const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track?genre=" + genre);
                setData(result.data);
            } catch (error) {}
        }
        // panggil fungsi getData
        getData();
        //menggunakan genre sebagai dependency
    }, [genre]);
    
  return (
    <>
    <h1>Category {genre}</h1>
    <div className="musicbycategory-container">
        {/* looping data */}
        {data && data.map((track) => <TrackCard key={track.id} track={track} />)}
    </div>
    </>
    )
}
