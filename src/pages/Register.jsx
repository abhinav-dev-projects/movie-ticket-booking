import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleRegister=()=>{

    const users=
      JSON.parse(localStorage.getItem("users"))||[];

    const exists=users.find(u=>u.username===username);

    if(exists){
      alert("User already exists");
      return;
    }

    users.push({username,password});

    localStorage.setItem("users",JSON.stringify(users));

    alert("Registered successfully");

    navigate("/");
  };

  return(
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>

        <input
          placeholder="Username"
          style={styles.input}
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>

      </div>
    </div>
  );
}

const styles = {
  container:{
    minHeight:"100vh",
    background:"#f1f3ef",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
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
    border:"1px solid #ddd5c0"
  },
  button:{
    width:"100%",
    padding:"10px",
    background:"#6b8e23",
    color:"#fff",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer"
  }
};


export default Register;