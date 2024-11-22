import AtomIcon from "../../../components/icons/AtomIcon.tsx";
import CalendarIcon from "../../../components/icons/CalendarIcon.tsx";
import ClickIcon from "../../../components/icons/ClickIcon";
import DepartmentIcon from "../../../components/icons/DepartmentIcon";
import FacebookIcon from "../../../components/icons/FacebookIcon";
import LinkedinIcon from "../../../components/icons/LinkedinIcon.tsx";
import MapIcon from "../../../components/icons/MapIcon";
import MessageDotIcon from "../../../components/icons/MessageDotIcon.tsx";
import YoutubeIcon from "../../../components/icons/YoutubeIcon.tsx";
import EheiTextLogo from "../Logo.tsx";
import "./styles.css";

function EheiFooter() {
  return (
    <footer id="ehei-footer">
      <EheiTextLogo
        logoColor="white"
        recognitionColor="white"
        id="ehei-footer-logo-text"
      />
      <div className="sections-container">
        <div className="section">
          <div className="title-container">
            <CalendarIcon className="title-icon" />
            <h3 className="title">SCHEDULE</h3>
          </div>
          <p className="text">From monday to friday :</p>
          <b className="text">9h30 - 18h30</b>
          <p className="text">Saturday :</p>
          <b className="text">9h30 - 13h</b>
        </div>
        <div className="section">
          <div className="title-container">
            <AtomIcon className="title-icon" />
            <h3 className="title">SOCIALS</h3>
          </div>
          <div className="textbox">
            <FacebookIcon className="icon" />
            <a href="" className="text">
              Ehei Oujda
            </a>
          </div>
          <div className="textbox">
            <LinkedinIcon className="icon" />
            <a href="" className="text">
              EHEI
            </a>
          </div>
          <div className="textbox">
            <YoutubeIcon className="icon" />
            <a href="" className="text">
              EHEI Courses
            </a>
          </div>
        </div>
        <form method="POST" action="/newsletter" className="section">
          <div className="title-container">
            <MessageDotIcon className="title-icon" />
            <h3 className="title">NEWSLETTER</h3>
          </div>
          <label className="text" htmlFor="footer-newsletter-email">
            Subscribe to our newsletter
          </label>
          <input
            type="email"
            required
            id="footer-newsletter-email"
            placeholder="Your Email address"
          />
          <button id="footer-newsletter-button">
            <ClickIcon id="footer-newsletter-button-icon" />
            <span>SUBSCRIBE</span>
          </button>
        </form>
        <div className="section">
          <div className="title-container">
            <MapIcon className="title-icon" />
            <h3 className="title">REACH US</h3>
          </div>
          <div className="textbox">
            <MessageDotIcon className="icon" />
            <span className="text">ehei.oujda@gmail.com</span>
          </div>
          <div className="textbox">
            <MapIcon className="icon" />
            <span className="text">
              Rue de la liberté – Hay Al Hikma–Oujda–Maroc
            </span>
          </div>
          <div className="textbox">
            <DepartmentIcon className="icon" />
            <span className="text">+212536533076</span>
          </div>
        </div>
      </div>
      <p className="copyright-notice">
        © Copyrights {new Date().getFullYear()} EHEI. All Rights Reserved.
      </p>
    </footer>
  );
}

export default EheiFooter;
