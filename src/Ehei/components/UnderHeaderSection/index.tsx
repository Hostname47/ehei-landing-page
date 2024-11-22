import LogoIcon from "../../../components/icons/LogoIcon";
import "./styles.css";

function EheiSlider() {
  return (
    <div id="ehei-under-header-section">
      <div id="ehei-under-header-section-overlay">
        <LogoIcon id="ehei-under-header-section-logo-icon" />
        <span id="ehei-under-header-section-title">
          Become a Software Engineer
        </span>
        <span id="ehei-under-header-section-subtitle">
          Today.. is <b style={{ color: "#1dc3ff" }}>Possible</b>
        </span>
      </div>
    </div>
  );
}

export default EheiSlider;
