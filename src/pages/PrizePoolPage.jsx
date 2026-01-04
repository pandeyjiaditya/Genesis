import { motion } from "framer-motion";
import "./PrizePoolPage.css";

export default function PrizePoolPage() {
  const bgImage =
    "https://www.figma.com/api/mcp/asset/827b965d-5e79-4c32-aa1d-0627db299cbd";
  const separatorImage =
    "https://www.figma.com/api/mcp/asset/7142ded7-ab07-4025-8ed7-8dfab41d19f0";

  // Track 1 cards
  const track1Cards = [
    "/assets/prize-pool/Button.png",
    "/assets/prize-pool/Button2.png",
    "/assets/prize-pool/Button3.png",
  ];

  // Track 2 cards
  const track2Cards = [
    "/assets/prize-pool/Button7.png",
    "/assets/prize-pool/Button8.png",
  ];

  return (
    <section className="prize-pool-page">
      {/* Background Images */}
      <div className="prize-pool-bg-blur">
        <img
          src="/assets/8d169005389a6a17d38e8e059f24644c 1@3x.png"
          alt="Background"
          className="prize-pool-bg-img-1"
        />
      </div>

      <div className="prize-pool-bg-effect">
        <img
          src={bgImage}
          alt="Background Effect"
          className="prize-pool-bg-img-2"
        />
      </div>

      {/* Navigation Bar with Separator */}
      <motion.div
        className="prize-pool-nav-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="prize-pool-separator-container">
          <img
            src={separatorImage}
            alt="Separator"
            className="prize-pool-separator-img"
          />
        </div>

        {/* Prize Pool Title */}
        <h1 className="prize-pool-title">PRIZE POOL</h1>
      </motion.div>

      {/* Prize Pool Content */}
      <div className="prize-pool-content-container">
        {/* Track 1 Section */}
        <motion.div
          className="prize-pool-track-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="prize-pool-track-header">
            <img
              src="/assets/prize-pool/Group 1000012511.png"
              alt="Main Game Jam Track"
              className="prize-pool-track-title-img"
            />
          </div>
          <div className="prize-pool-cards-grid">
            {track1Cards.map((card, index) => (
              <motion.img
                key={`track1-${index}`}
                src={card}
                alt={`Main Game Jam Prize ${index + 1}`}
                className="prize-pool-card-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Track 2 Section */}
        <motion.div
          className="prize-pool-track-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="prize-pool-track-header">
            <img
              src="/assets/prize-pool/Group 1000012512.png"
              alt="VR Track"
              className="prize-pool-track-title-img"
            />
          </div>
          <div className="prize-pool-cards-grid">
            {track2Cards.map((card, index) => (
              <motion.img
                key={`track2-${index}`}
                src={card}
                alt={`VR Track Prize ${index + 1}`}
                className="prize-pool-card-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
