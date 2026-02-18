import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import Summary from "./pages/Summary";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";


function Layout() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
    </>
  );
}


function App() {

  return (

    <BrowserRouter basename="/movie-ticket-booking">

      <Routes>

        <Route element={<Layout />}>

          <Route index element={<Login />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/seats" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;
