import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import Summary from "./pages/Summary";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="movie-ticker-booking">
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/seats" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
