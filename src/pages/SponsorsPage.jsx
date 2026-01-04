import { motion } from "framer-motion";
import "./SponsorsPage.css";

// Generate rain drops with random positions and delays
const rainDrops = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 2}s`,
}));

export default function SponsorsPage() {
  return (
    <section className="sponsors-page">
      {/* Background */}
      <div className="sponsors-bg">
        <img
          src="/assets/c4d510f1ea08e57dd03310638fc9805c 1.png"
          alt="Background"
          className="sponsors-bg-img"
        />
        {/* Rain Effect */}
        <div className="rain">
          {rainDrops.map((drop) => (
            <div
              key={drop.id}
              className="drop"
              style={{
                left: drop.left,
                animationDelay: drop.delay,
              }}
            ></div>
          ))}
        </div>
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
        <motion.div
          className="sponsor-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/assets/images/Group 1000012514.png"
            alt="Sponsor 1"
            className="sponsor-image"
          />
        </motion.div>
        <motion.div
          className="sponsor-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/assets/images/Group 1000012515.png"
            alt="Sponsor 2"
            className="sponsor-image"
          />
        </motion.div>
        <motion.div
          className="sponsor-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/assets/images/Group 1000012517.png"
            alt="Sponsor 3"
            className="sponsor-image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
