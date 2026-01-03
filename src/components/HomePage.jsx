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
        {/* Background Image */}
        <div className="background-container">
          <img
            src="/assets/8d169005389a6a17d38e8e059f24644c 1@3x.png"
            alt="Background"
            className="background-image"
          />
        </div>

        {/* Decorative blur element */}
        <div className="blur-overlay"></div>

        {/* White Line Separator */}
        <motion.div
          className="nav-separator"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/Group 1000012493.png"
            alt="Separator"
            className="separator-line"
          />
        </motion.div>

        {/* Top Navigation Bar */}
        <motion.div
          className="top-nav-bar"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Top Left Logo */}
          <div className="nav-logo">
            <div className="logo-container">
              <img
                src="/assets/icons/Group 1000012422 2.svg"
                alt="Genesis Logo"
                className="genesis-icon"
              />
            </div>
          </div>

          {/* Navigation Title */}
          <h1 className="nav-title">ABOUT GENESIS</h1>

          {/* Top Right Icons */}
          <div className="nav-icons">
            <button className="icon-button">
              <img
                src="/assets/icons/843b6b77f46c1c3a69091d13fa9593d7 1.svg"
                alt="Discord"
                className="social-icon"
              />
            </button>
            <button className="icon-button">
              <img
                src="/assets/icons/1737d5e028e7ecb7605da2756202440f 1.svg"
                alt="Instagram"
                className="social-icon"
              />
            </button>
          </div>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          className="content-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-container">
            <p className="about-text">
              Rev your engines and fasten your seat belts as the GDXR Club
              kick-starts the Fifth Edition of Genesis - your ticket to an
              adventure that hits closer to home than ever! Returning after the
              2025 Last Edition, this 2026 Genesis isn't just about pixels and
              coding; it's about bringing the spirit of games to life.
            </p>
          </div>
        </motion.div>

        {/* Player Character */}
        <motion.div
          className="player-character"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/player-character.png"
            alt="Player"
            className="player-image"
          />
        </motion.div>
      </section>
    </>
  );
}
