import { motion } from "framer-motion";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Background */}
      <div className="about-background" />

      {/* Main Content Panel */}
      <motion.div
        className="about-panel"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="about-header">
          {/* Top Border */}
          <div className="header-top-border" />

          {/* Logo Icon */}
          <div className="header-logo">
            <img src="/assets/icons/Frame 1618872227.svg" alt="Genesis Logo" />
          </div>

          {/* Title */}
          <h1 className="about-title">ABOUT GENESIS</h1>

          {/* Action Icons */}
          <div className="header-actions">
            <button className="action-icon minimize-icon">
              <img src="/assets/icons/Group 1000012486.svg" alt="Minimize" />
            </button>
            <button className="action-icon close-icon">
              <img src="/assets/icons/Group 1000012482.svg" alt="Close" />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="about-content-wrapper">
          <div className="about-content-box">
            <p className="about-text">
              Rev your engines and fasten your seat belts as the GDXR Club
              kick-starts the Fifth Edition of Genesis - your ticket to an
              adventure that hits closer to home than ever! Returning after the
              2025 Last Edition, this 2026 Genesis isn't just about pixels and
              coding; it's about bringing the spirit of games to life.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
