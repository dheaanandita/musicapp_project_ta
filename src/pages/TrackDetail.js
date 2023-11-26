import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardDetail from '../components/CardDetail';
import "./TrackDetail.css";


export default function TrackDetail() {
    // deklarasi state
    // route: /detail/:id
    // ambil variable id yang ada di route dengan useParams
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        // ambil data dari API
      const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track/" + id);
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
        <h1>Detail "{data.track}"</h1>
        {/* jika data ada, maka tampilkan data */}
        {data && <CardDetail data={data} />}  
    </div>
  )
}
