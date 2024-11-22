import MessageDotIcon from "../../../components/icons/MessageDotIcon.tsx";
import MessageSvg from "../../assets/svgs/MessageSvg";
import "./styles.css";

function EheiContactSection() {
  return (
    <div id="ehei-contact-section">
      <div className="contact-section">
        <h2 className="title">Contact Us</h2>
        <p className="subtitle">
          Do you have any question or enquiry !? Don't hesitate to send it to us
          using the form below
        </p>
        <form method="POST" action="/contact" id="ehei-contact-form">
          <input
            type="text"
            name="name"
            id="ehei-contact-name"
            className="input"
            required
            pattern="[A-Za-z]{2,100}"
            placeholder="Your full name"
          />
          <input
            type="email"
            name="email"
            required
            id="ehei-contact-email"
            className="input"
            placeholder="Email address (Make sure it's valid)"
          />
          <input
            type="tel"
            name="phone"
            required
            id="ehei-contact-phone"
            className="input"
            pattern="0[5,6]{1}[0-9]{8}"
            placeholder="Phone number (Double check it :)"
          />

          <textarea
            name="message"
            required
            minLength={4}
            maxLength={2000}
            id="ehei-contact-message"
            className="input"
            placeholder="Express yourself and make your stupid messages clear :)"
            style={{ resize: "vertical", maxHeight: 200 }}
          ></textarea>

          <button type="submit" className="button">
            <MessageDotIcon className="button-icon" />
            <span className="button-title">SEND MESSAGE</span>
          </button>
        </form>
      </div>
      <MessageSvg className="illustration" />
    </div>
  );
}

export default EheiContactSection;
