import React,{useEffect,useState} from 'react';
import axios from 'axios';
import TrackCard from '../components/TrackCard';

export default function Leaderboards() {
  // deklarasi state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      //sambil nunggu data diambil, loading akan bernilai true
      setError(false);
      setLoading(true);
      try {
        // ambil data dari API
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track?sortBy=likes&order=desc");
        setData(result.data);
      } catch (error) {
        // jika terjadi error, maka akan menampilkan error
        setError(true);
      }
      // setelah data diambil, loading akan bernilai false
      setLoading(false);
    }
    // panggil fungsi getData
    getData();
  }, []);

  if (error) {
    // jika terjadi error, maka akan menampilkan error
    return <h2>Error</h2>;
  }
  if (loading) {
    // jika loading bernilai true, maka akan menampilkan loading
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Most Liked Song</h1>
      <div className="musicbycategory-container">
        {/* looping data */}
        {data && data.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>

    </div>
  )
}
