import { motion } from "framer-motion";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-page">
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

      {/* Top Navigation Bar */}
      <motion.div
        className="top-nav-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Navigation Title */}
        <h1 className="nav-title">ABOUT GENESIS</h1>
      </motion.div>

      {/* Main Content Box */}
      <motion.div
        className="content-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/assets/images/player-character.png"
          alt="Player"
          className="player-image"
        />
      </motion.div>
    </section>
  );
}
