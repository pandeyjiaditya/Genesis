import { motion } from "framer-motion";
import DomeGallery from "../components/DomeGallery";
import "./MemoriesPage.css";

export default function MemoriesPage() {
  return (
    <section className="memories-page">
      {/* Background Layer 1 - Blur Effect */}
      <div className="memories-bg-blur">
        <img
          src="/assets/8d169005389a6a17d38e8e059f24644c 1@3x.png"
          alt="Background Blur"
          className="memories-bg-img-1"
        />
      </div>

      {/* Separator Line */}
      <motion.div
        className="memories-separator-container"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/Group 1000012493.png"
          alt="Separator"
          className="memories-separator-img"
        />
        <h1 className="memories-title">MEMORIES</h1>
      </motion.div>

      {/* Dome Gallery */}
      <motion.div
        className="memories-gallery-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <DomeGallery
          fit={0.5}
          minRadius={650}
          maxVerticalRotationDeg={60}
          segments={24}
          grayscale={false}
        />
      </motion.div>
    </section>
  );
}
