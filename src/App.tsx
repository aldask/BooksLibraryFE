import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import CurrentReservations from "./Components/CurrentReservations";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/reservations" element={<CurrentReservations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
