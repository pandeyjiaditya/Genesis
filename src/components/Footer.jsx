import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Character */}
      <motion.div
        className="footer-character"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/8f5cd03a-5893-49bc-ab10-75bdf47771d6 1_layerstyle.png"
          alt="Minecraft Character"
          className="character-img"
        />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="footer-contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="footer-title">Contact Us</h2>

        <div className="contact-person">
          <h3 className="contact-name">Abhinav S</h3>
          <a href="tel:+919778052399" className="contact-phone">
            +91 9778052399
          </a>
        </div>

        <div className="contact-person">
          <h3 className="contact-name">Aradhana Kumari</h3>
          <a href="tel:+917050262224" className="contact-phone">
            +91 70502 62224
          </a>
        </div>
      </motion.div>

      {/* Venue Section */}
      <motion.div
        className="footer-venue"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="footer-title">Venue</h2>
        <div className="venue-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.7661234567891!2d73.8725116!3d18.6069264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1704365400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIT Pune Location"
          ></iframe>
        </div>
      </motion.div>
    </footer>
  );
}
