import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/movies");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f1f3ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "28px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4a5d23" 
  },
  input: {
    width: "100%",
    padding: "9px",
    marginBottom: "14px",
    borderRadius: "6px",
    border: "1px solid #cdd5c0",
    outline: "none"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6b8e23", 
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Login;
