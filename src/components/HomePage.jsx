import { motion } from "framer-motion";
import "./HomePage.css";
import "../pages/AboutPage.css";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="home-page">
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/assets/main page video.mp4" type="video/mp4" />
        </video>

        {/* Top Left Logo */}
        <motion.div
          className="top-left-logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="logo-container">
            <img
              src="/assets/icons/Group 1000012486.svg"
              alt="Genesis Logo"
              className="genesis-icon"
            />
          </div>
        </motion.div>

        {/* Top Right Menu Button */}
        <motion.div
          className="top-right-menu"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="menu-button">
            <img
              src="/assets/icons/Frame 1618872227.svg"
              alt="Menu"
              className="menu-icon"
            />
          </button>
        </motion.div>

        {/* Center Content */}
        <div className="center-content">
          {/* Genesis Logo */}
          <motion.div
            className="genesis-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/assets/images/Group 1000012488.png"
              alt="Genesis"
              className="main-logo"
            />
          </motion.div>

          {/* Register Button */}
          <motion.div
            className="register-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="register-button">
              <img
                src="/assets/icons/Group 1000012482.svg"
                alt="Genesis"
                className="main-logo"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-page">
        {/* Background */}
        <div className="about-background" />

        {/* Main Content Panel */}
        <motion.div
          className="about-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div className="about-header">
            {/* Top Border */}
            <div className="header-top-border" />

            {/* Logo Icon */}
            <div className="header-logo">
              <img
                src="/assets/icons/Frame 1618872227.svg"
                alt="Genesis Logo"
              />
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
                adventure that hits closer to home than ever! Returning after
                the 2025 Last Edition, this 2026 Genesis isn't just about pixels
                and coding; it's about bringing the spirit of games to life.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
