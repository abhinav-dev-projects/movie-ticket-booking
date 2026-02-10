import { useEffect, useState } from "react";

function Summary() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("currentBooking");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  if (!booking) {
    return <p>No booking found</p>;
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Booking Confirmed 🎉</h2>

      <div style={styles.card}>
        <p><strong>Movie:</strong> {booking.movie}</p>
        <p><strong>Show Time:</strong> {booking.time}</p>
        <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
        <p><strong>Total Paid:</strong> ₹{booking.total}</p>

        <p style={styles.success}>
          Payment Successful
        </p>
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
    padding: "22px",
    borderRadius: "10px",
    maxWidth: "420px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },
  success: {
    marginTop: "15px",
    color: "#6b8e23",
    fontWeight: "bold"
  }
};

export default Summary;
