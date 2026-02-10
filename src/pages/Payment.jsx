import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("currentBooking");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  if (!booking) {
    return <p>No booking found</p>;
  }

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    localStorage.setItem("paymentStatus", "success");
    navigate("/summary");
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Payment</h2>

      <div style={styles.card}>
        <p><strong>Movie:</strong> {booking.movie}</p>
        <p><strong>Show Time:</strong> {booking.time}</p>
        <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
        <p><strong>Total Amount:</strong> ₹{booking.total}</p>

        <h3 style={styles.subHeading}>Select Payment Method</h3>

        <div style={styles.methods}>
          <label style={styles.method}>
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            UPI
          </label>

          <label style={styles.method}>
            <input
              type="radio"
              name="payment"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Card
          </label>

          <label style={styles.method}>
            <input
              type="radio"
              name="payment"
              value="Cash"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash
          </label>
        </div>

        <button style={styles.payBtn} onClick={handlePayment}>
          Pay Now
        </button>
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
  subHeading: {
    marginTop: "18px",
    marginBottom: "10px",
    color: "#4a5d23"
  },
  methods: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px"
  },
  method: {
    color: "#2e2e2e"
  },
  payBtn: {
    padding: "10px 20px",
    backgroundColor: "#6b8e23",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Payment;