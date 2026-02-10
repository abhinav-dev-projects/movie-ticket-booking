import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h3 style={styles.title}>Movie Ticket Booking</h3>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#1e1e1e",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff"
  },
  title: {
    margin: 0
  },
  button: {
    backgroundColor: "#dc3545",
    color: "#ffffff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Navbar;
