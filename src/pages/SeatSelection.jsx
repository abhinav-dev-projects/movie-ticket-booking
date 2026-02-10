import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatPrice = 150;

  useEffect(() => {
    const selectedMovie = localStorage.getItem("selectedMovie");
    if (selectedMovie) {
      setMovie(JSON.parse(selectedMovie));
    }
  }, []);

  if (!movie) {
    return <p>No movie selected</p>;
  }

  const showTimes = ["10:00 AM", "7:00 PM"];

  const seats = [
    "A1","A2","A3","A4","A5",
    "B1","B2","B3","B4","B5",
    "C1","C2","C3","C4","C5",
    "D1","D2","D3","D4","D5",
  ];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * seatPrice;

  const handleContinue = () => {
    if (!selectedTime || selectedSeats.length === 0) {
      alert("Select show time and at least one seat");
      return;
    }

    const bookingDetails = {
      movie: movie.name,
      time: selectedTime,
      seats: selectedSeats,
      total: totalPrice
    };

    localStorage.setItem("currentBooking", JSON.stringify(bookingDetails));

    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    allBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    navigate("/payment");
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Seat Selection</h2>

      <div style={styles.card}>
        <p><strong>Movie:</strong> {movie.name}</p>

        <h3 style={styles.subHeading}>Show Time</h3>
        <div style={styles.timeRow}>
          {showTimes.map(time => (
            <button
              key={time}
              style={{
                ...styles.timeBtn,
                backgroundColor:
                  selectedTime === time ? "#6b8e23" : "#e6eadf",
                color:
                  selectedTime === time ? "#fff" : "#2e2e2e"
              }}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <h3 style={styles.subHeading}>Select Seats</h3>
        <div style={styles.seatGrid}>
          {seats.map(seat => (
            <div
              key={seat}
              style={{
                ...styles.seat,
                backgroundColor: selectedSeats.includes(seat)
                  ? "#6b8e23"
                  : "#f1f3ef",
                color: selectedSeats.includes(seat)
                  ? "#ffffff"
                  : "#2e2e2e"
              }}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <>
            <p style={styles.info}>
              <strong>Seats:</strong> {selectedSeats.join(", ")}
            </p>
            <p style={styles.info}>
              <strong>Total:</strong> ₹{totalPrice}
            </p>

            <button
              style={styles.continueBtn}
              onClick={handleContinue}
            >
              Continue
            </button>
          </>
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
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    maxWidth: "520px"
  },
  subHeading: {
    marginTop: "20px",
    marginBottom: "10px",
    color: "#4a5d23"
  },
  timeRow: {
    display: "flex",
    gap: "12px"
  },
  timeBtn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  seatGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 60px)",
    gap: "10px",
    marginTop: "10px"
  },
  seat: {
    padding: "10px",
    textAlign: "center",
    borderRadius: "6px",
    cursor: "pointer",
    border: "1px solid #cdd5c0"
  },
  info: {
    marginTop: "12px"
  },
  continueBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#6b8e23",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default SeatSelection;
