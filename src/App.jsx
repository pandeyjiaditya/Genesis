import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";
import AboutPage from "./pages/AboutPage";
import TimelinePage from "./pages/TimelinePage";
import PrizePoolPage from "./pages/PrizePoolPage";
import MemoriesPage from "./pages/MemoriesPage";
import "./App.css";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <LoadingPage onLoadComplete={handleLoadComplete} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/prize-pool" element={<PrizePoolPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
