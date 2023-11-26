import React from 'react'
import { Link } from "react-router-dom";

export default function CategoriesCard({genre}) {
  //menggunakan variable genre sebagai props
  return (
    <Link to={`/categories/${genre.genre}`}>
      {/* link digunakan untuk routing ke halaman lain dengan params genre */}
    <div>
        <div className="category-container">
            <img src={genre.image} alt="genre" />
            <h2>{genre.genre}</h2>
        </div>
    </div>
    </Link>
  )
}
