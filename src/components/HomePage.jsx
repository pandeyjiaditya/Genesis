import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./HomePage.css";
import "../pages/AboutPage.css";
import TimelinePage from "../pages/TimelinePage";
import PrizePoolPage from "../pages/PrizePoolPage";
import MemoriesPage from "../pages/MemoriesPage";
import SponsorsPage from "../pages/SponsorsPage";
import FAQsPage from "../pages/FAQsPage";
import Footer from "./Footer";

const menuItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT US" },
  { id: "timeline", label: "TIMELINE" },
  { id: "prizes", label: "PRIZE POOL" },
  { id: "memories", label: "MEMORIES" },
  { id: "sponsors", label: "SPONSORS" },
  { id: "faqs", label: "FAQs" },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRegister = () => {
    window.open(
      "https://unstop.com/events/genesis-5-punes-largest-game-jam-army-institute-of-technology-ait-pune-1584494?lb=XXQIl8jQ&utm_medium=Share&utm_source=pankacha9021&utm_campaign=Online_coding_challenge",
      "_blank"
    );
  };

  const handleMenuClick = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleRulebookClick = () => {
    setIsMenuOpen(false);
    window.open("/Genesis_5_Rulebook.pdf", "_blank");
  };

  return (
    <>
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="menu-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Close Button */}
              <motion.button
                className="menu-close-btn"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Menu Title */}
              <motion.h2
                className="menu-title"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                MENU
              </motion.h2>

              {/* Menu Items */}
              <nav className="menu-nav">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="menu-item"
                    onClick={() => handleMenuClick(item.id)}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="menu-item-icon">▶</span>
                    {item.label}
                  </motion.button>
                ))}

                {/* Rulebook Button */}
                <motion.button
                  className="menu-item menu-item-rulebook"
                  onClick={handleRulebookClick}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + menuItems.length * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="menu-item-icon">📜</span>
                  RULE BOOK
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="home-page">
        {/* Background Video */}
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => console.error("Video loading error:", e)}
        >
          <source src="/assets/main page video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
          <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
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
            <button className="register-button" onClick={handleRegister}>
              <img
                src="/assets/icons/Group 1000012482.svg"
                alt="Register Now"
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
          viewport={{ once: false, amount: 0.3 }}
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
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Navigation Title */}
          <h1 className="nav-title">ABOUT GENESIS</h1>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          className="content-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
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
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/assets/images/player-character.png"
            alt="Player"
            className="player-image"
          />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="timeline">
        <TimelinePage />
      </section>

      {/* Prize Pool Section */}
      <section id="prizes">
        <PrizePoolPage />
      </section>

      {/* Memories Section */}
      <section id="memories">
        <MemoriesPage />
      </section>

      {/* Sponsors Section */}
      <section id="sponsors">
        <SponsorsPage />
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <FAQsPage />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
