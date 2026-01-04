import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQsPage.css";

const faqData = {
  general: [
    {
      question: "What is Genesis?",
      answer:
        "Genesis is a 48-hour game development hackathon organized by the GDXR Club. It brings together developers, artists, and designers to create amazing games from scratch.",
    },
    {
      question: "When and where is Genesis happening?",
      answer:
        "Genesis 2026 will be held at the university campus. The exact dates and venue details will be announced soon. Stay tuned to our social media for updates!",
    },
    {
      question: "Who can participate in Genesis?",
      answer:
        "Genesis is open to all students - whether you're a beginner or an experienced developer. Teams can consist of 2-4 members from any educational institution.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Registration details including any fees will be announced on our official website. Early bird registrations may receive special discounts!",
    },
  ],
  technical: [
    {
      question: "What game engines are allowed?",
      answer:
        "You can use any game engine of your choice including Unity, Unreal Engine, Godot, GameMaker, or even build from scratch. We encourage creativity!",
    },
    {
      question: "Can I use pre-made assets?",
      answer:
        "You can use free/licensed assets from asset stores, but the core gameplay and majority of content should be created during the hackathon. Original work is highly valued.",
    },
    {
      question: "What platforms can we develop for?",
      answer:
        "You can develop for PC, Web, or Mobile platforms. Make sure your game can be demoed during the judging phase.",
    },
    {
      question: "Will there be workshops or mentorship?",
      answer:
        "Yes! We'll have workshops on game development basics, and experienced mentors will be available throughout the event to help teams.",
    },
  ],
  prizes: [
    {
      question: "What are the prizes?",
      answer:
        "We have exciting prizes across multiple categories including Best Overall Game, Best Art, Best Innovation, and more. Total prize pool details will be announced soon!",
    },
    {
      question: "How will winners be selected?",
      answer:
        "Games will be judged based on creativity, gameplay, technical execution, art & audio, and theme interpretation by our panel of industry experts.",
    },
    {
      question: "Are there any special category prizes?",
      answer:
        "Yes! Apart from main prizes, we have special awards for Best First-Time Team, Best Use of Theme, and Audience Choice award.",
    },
  ],
  logistics: [
    {
      question: "Will food be provided?",
      answer:
        "Yes, meals and snacks will be provided throughout the 48-hour event. We accommodate dietary restrictions - please mention them during registration.",
    },
    {
      question: "Can I sleep at the venue?",
      answer:
        "The venue will be open 24/7 during the hackathon. We recommend bringing sleeping bags or blankets if you plan to rest at the venue.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, any peripherals you need, and personal items. We'll provide power strips, internet, and workspace.",
    },
  ],
};

const categories = [
  { id: "general", label: "GENERAL" },
  { id: "technical", label: "TECHNICAL" },
  { id: "prizes", label: "PRIZES" },
  { id: "logistics", label: "LOGISTICS" },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="faq-question">
        <span>{question}</span>
        <div className={`faq-icon ${isOpen ? "open" : ""}`}>
          <span className="icon-bar horizontal"></span>
          <span className="icon-bar vertical"></span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(null);
  };

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate random sparkle particles
  const generateSparkles = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 4,
    }));
  };

  const sparkles = generateSparkles();

  return (
    <section className="faqs-page">
      {/* Background */}
      <div className="faqs-bg">
        <img
          src="/assets/514824c77251b4e390d57f30a2693144 1.png"
          alt="Background"
          className="faqs-bg-img"
        />
        {/* Sparkling lights animation */}
        <div className="sparkles-container">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration}s`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Separator Line */}
      <motion.div
        className="faqs-separator-container"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/Group 1000012493.png"
          alt="Separator"
          className="faqs-separator-img"
        />
        <h1 className="faqs-title">FAQs</h1>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="faqs-categories"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* FAQ Content */}
      <motion.div
        className="faqs-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="faqs-list">
          {faqData[activeCategory].map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleFAQClick(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
