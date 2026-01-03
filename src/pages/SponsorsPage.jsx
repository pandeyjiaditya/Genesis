import { motion } from "framer-motion";
import "./SponsorsPage.css";

export default function SponsorsPage() {
  return (
    <section className="sponsors-page">
      {/* Background */}
      <div className="sponsors-bg">
        <img
          src="/assets/8d169005389a6a17d38e8e059f24644c 1@3x.png"
          alt="Background"
          className="sponsors-bg-img"
        />
      </div>

      {/* Dark Overlay */}
      <div className="sponsors-overlay"></div>

      {/* Separator Line */}
      <motion.div
        className="sponsors-separator-container"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/Group 1000012493.png"
          alt="Separator"
          className="sponsors-separator-img"
        />
        <h1 className="sponsors-title">SPONSORS</h1>
      </motion.div>

      {/* Sponsors Content - Ready for images */}
      <motion.div
        className="sponsors-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/Group 1000012514.png"
          alt="Sponsor 1"
          className="sponsor-image"
        />
        <img
          src="/assets/images/Group 1000012515.png"
          alt="Sponsor 2"
          className="sponsor-image"
        />
        <img
          src="/assets/images/Group 1000012517.png"
          alt="Sponsor 3"
          className="sponsor-image"
        />
      </motion.div>
    </section>
  );
}
