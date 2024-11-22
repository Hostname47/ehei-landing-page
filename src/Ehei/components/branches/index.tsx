import "./styles.css";
import TerminalIcon from "../../../components/icons/TerminalIcon";
import BoxIcon from "../../../components/icons/BoxIcon";
import ClickIcon from "../../../components/icons/ClickIcon";
import LinkIcon from "../../../components/icons/LinkIcon";

function EheiBranchesSection() {
  return (
    <div id="ehei-branches-section">
      <div className="ehei-branch-section">
        <BoxIcon className="icon" />
        <h3 className="title">industrial systems</h3>
        <p className="description">
          Empowering industries with cutting-edge systems, designed to enhance
          and drive progress.
        </p>
        <a href="/industrial-systems" className="ehei-branch-button">
          <LinkIcon className="icon" />
          Learn more
        </a>
      </div>
      <div className="ehei-branch-section">
        <TerminalIcon className="icon" />
        <h3 className="title">Computer Engineering</h3>
        <p className="description">
          Innovative software solutions crafted with precision, elevating
          technology to solve real-world challenges.
        </p>
        <a href="/computer-engineering" className="ehei-branch-button">
          <LinkIcon className="icon" />
          Learn more
        </a>
      </div>
      <div className="ehei-branch-section">
        <ClickIcon className="icon" />
        <h3 className="title">IT and Management</h3>
        <p className="description">
          Integrated IT and management strategies, aligning technology with
          business excellence.
        </p>
        <a href="/it-and-management" className="ehei-branch-button">
          <LinkIcon className="icon" />
          Learn more
        </a>
      </div>
    </div>
  );
}

export default EheiBranchesSection;
