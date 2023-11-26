import React, { useEffect } from 'react'
import CategoriesCard from '../components/CategoriesCard'
import "./Categories.css"
import axios from 'axios'

export default function Categories() {
    // deklarasi state
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect (() => {
        const getData = async () => {
            //sambil nunggu data diambil, loading akan bernilai true
            setError(false);
            setLoading(true);
            try {
                // ambil data dari API
                const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/genres");
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
        <h1>Categories</h1>
        <div className="categories-container">
            {/* looping data */}
            {data.map((genre) => (
                <CategoriesCard key={genre.id} genre={genre} />
            ))}
    </div>
    </div>
  )
}
