import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    if (storedMovies && storedMovies.length > 0) {
      setMovies(storedMovies);
    } else {
      const defaultMovies = [
        { name: "Inception", language: "English", rating: "8.8" },
        { name: "Lokah" , language: "Malayalam" , rating: "9.0"},
        { name: "Bugonia" , language: "English" , rating: "8.6"},
        { name: "F1" , language: "English" , rating: "8.3"}
        
      ];
      localStorage.setItem("movies", JSON.stringify(defaultMovies));
      setMovies(defaultMovies);
    }
  }, []);

  const handleBook = (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    navigate("/seats");
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Now Showing</h2>

      <div style={styles.grid}>
        {movies.map((movie, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.movieName}>{movie.name}</h3>

            <p style={styles.text}>
              <strong>Language:</strong> {movie.language}
            </p>

            <p style={styles.text}>
              <strong>Rating:</strong> 🌟 {movie.rating}
            </p>

            <button
              style={styles.button}
              onClick={() => handleBook(movie)}
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f3ef",
    padding: "30px"
  },
  heading: {
    color: "#4a5d23",
    marginBottom: "25px"
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" 
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "18px",
    borderRadius: "10px",
    width: "260px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },
  movieName: {
    marginBottom: "10px",
    color: "#2e2e2e"
  },
  text: {
    marginBottom: "6px",
    color: "#444"
  },
  button: {
    marginTop: "12px",
    padding: "8px 16px",
    backgroundColor: "#6b8e23",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default MovieList;
