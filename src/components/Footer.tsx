import "../styles/Footer.scss";
import { MdMailOutline } from "react-icons/md";
import { logo_main } from "../assets/images";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="footer section has-bg-image text-center">
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img
                src={logo_main}
                width="250"
                height="140"
                loading="lazy"
                alt="grilli home"
              />
            </a>
            <address className="body-4">
            Indira Chowk, Supela, Ram Nagar, Bhilai, Chhattisgarh, 490023
            </address>
            <a href="mailto:moonlightcaterer@gmail.com" className="body-4 contact-link">
              moonlightcaterer@gmail.com
            </a>

            <a href="tel:+917389662115" className="body-4 contact-link">
              Booking Request : +91 738-966-2115
            </a>

            <p className="body-4">Open : 09:00 am - 10:00 pm</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
            <p className="title-1 mb-8">Get News & Offers</p>
            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <MdMailOutline className="mail-icon " />

                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  className="input-field"
                />
              </div>
              <div className="icon-wrapper">
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>

                <span className="text text-2">
                  Subscribe
                </span>
              </button> 
              </div>

              {/* <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>

                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button> */}
            </form>
          </div>
          <motion.ul
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // Trigger animation when 30% of the card is in view
          transition={{ duration: 0.5 }} className="footer-list">
            {/* <Link to="/" className="label-2 footer-link hover-underline"><li>Home</li></Link> */}
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Menus
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Our Chefs
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Contact
              </a>
            </li>
          </motion.ul>

          <motion.ul
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // Trigger animation when 30% of the card is in view
          transition={{ duration: 0.5 }}
           className="footer-list">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61550043725907&mibextid=ZbWKwL" className="label-2 footer-link hover-underline" target="_blank">
                Facebook
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/moonlight__catering" className="label-2 footer-link hover-underline" target="_blank">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline" target="_blank">
                Twitter
              </a>
            </li>

            <li>
              <a href="https://youtube.com/@moonlightcaterer" className="label-2 footer-link hover-underline" target="_blank">
                Youtube
              </a>
            </li>

            <li>
              <a href="https://www.google.com/maps/place/Moonlight+Caterers/data=!4m2!3m1!1s0x0:0x4aa45e0794c24635?sa=X&ved=1t:2428&ictx=111&cshid=1734858313596383" target="_blank" className="label-2 footer-link hover-underline">
                Google Map
              </a>
            </li>
          </motion.ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Moonlight Caterer. All Rights Reserved 
            {/* | Crafted by{" "}
            <a
              href="https://shashwatsagar.me"
              target="_blank"
              className="link"
            >
              NIC Team
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
