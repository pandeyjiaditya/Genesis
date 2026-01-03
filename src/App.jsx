import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";
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
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
