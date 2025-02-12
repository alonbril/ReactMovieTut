import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Spiderman", release_date: "2022" },
        { id: 3, title: "Iron Man", release_date: "2013" },
        { id: 4, title: "Avengers", release_date: "2019" }
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard 
                        movie={movie} 
                        key={movie.id} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;