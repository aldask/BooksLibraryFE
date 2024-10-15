import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./Components/BookList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
