import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MessagingPage from "./pages/MessagingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessagingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
