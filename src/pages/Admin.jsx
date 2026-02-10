import { useEffect, useState } from "react";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("bookings");
    if (data) {
      setBookings(JSON.parse(data));
    }
  }, []);

  const addMovie = () => {
    if (!movieName || !language || !rating) {
      alert("Please fill all movie details");
      return;
    }

    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    const newMovie = {
      name: movieName,
      language: language,
      rating: rating
    };

    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));

    alert("Movie added successfully");

    setMovieName("");
    setLanguage("");
    setRating("");
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Admin Panel</h2>

      {/* Add Movie Section */}
      <div style={styles.card}>
        <h3 style={styles.subHeading}>Add Movie</h3>

        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={styles.input}
        />

        <button onClick={addMovie} style={styles.button}>
          Add Movie
        </button>
      </div>

      {/* Bookings Table */}
      <div style={styles.card}>
        <h3 style={styles.subHeading}>All Bookings</h3>

        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Movie</th>
                <th style={styles.th}>Show Time</th>
                <th style={styles.th}>Seats</th>
                <th style={styles.th}>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td style={styles.td}>{b.movie}</td>
                  <td style={styles.td}>{b.time}</td>
                  <td style={styles.td}>{b.seats.join(", ")}</td>
                  <td style={styles.td}>{b.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
    marginBottom: "20px"
  },
  subHeading: {
    marginBottom: "15px",
    color: "#4a5d23"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    marginBottom: "30px"
  },
  input: {
    width: "260px",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #cdd5c0",
    display: "block"
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#6b8e23",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  },
  th: {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#e6eadf",
    color: "#2e2e2e"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #d2d8c9"
  }
};

export default Admin;
