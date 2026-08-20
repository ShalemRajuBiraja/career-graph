import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {ExploreOpportunities} from "./pages/ExploreOpportunities";
import CareerResults from "./pages/CareerResults";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreOpportunities />} />
        <Route path="/career-results" element={<CareerResults />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </BrowserRouter>
    
  );
}

export default App;