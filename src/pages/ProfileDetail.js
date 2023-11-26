import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArtistDetail from '../components/ArtistDetail';
import "./ProfileDetail.css";

export default function ProfileDetail() {
    // deklarasi state
    // route: /artist/:id
    // ambil variable id yang ada di route dengan useParams
    const [data, setData] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const getData = async () => {
        try {
          // ambil data dari API
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/artist/" + id);
        setData(result.data);
      }
      catch (error) {}
      }
      // panggil fungsi getData
      getData();
      //menggunakan id sebagai dependency
    }, [id]);
  
    return (
      <div>
          <h1>Profile "{data.name}"</h1>
          {/* jika data ada, maka tampilkan data */}
          {data && <ArtistDetail data={data} />}  
      </div>
    )
  }
