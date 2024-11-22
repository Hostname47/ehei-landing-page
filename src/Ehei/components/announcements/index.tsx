import "./styles.css";
import LinkIcon from "../../../components/icons/LinkIcon";
import AnimatedBar from "./components/AnimatedBar";

function Announcements() {
  return (
    <div id="ehei-announcements">
      <a href="" target="_blank" id="ehei-announcements-preinsc-button">
        <LinkIcon id="ehei-announcements-preinsc-button-icon" />
        PRÉINSCRIPTION
      </a>
      <div id="ehei-announcements-box">
        <AnimatedBar />
      </div>
    </div>
  );
}

export default Announcements;
