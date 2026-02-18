import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(
    u => u.username === username && u.password === password
  );

  if (!found) {
    alert("Invalid username or password");
    return;
  }


  localStorage.setItem("currentUser", JSON.stringify(found));

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={{marginTop:"10px"}}>
          New user? <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f1f3ef"
  },
  card:{
    background:"#fff",
    padding:"28px",
    borderRadius:"10px",
    width:"320px",
    boxShadow:"0 6px 18px rgba(0,0,0,0.08)"
  },
  title:{
    textAlign:"center",
    marginBottom:"20px",
    color:"#4a5d23"
  },
  input:{
    width:"100%",
    padding:"9px",
    marginBottom:"14px",
    borderRadius:"6px",
    border:"1px solid #ddd5c0",
    outline:"none"
  },
  button:{
    width:"100%",
    padding:"10px",
    background:"#6b8e23",
    color:"#fff",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontWeight:"bold"
  }
};

export default Login;
