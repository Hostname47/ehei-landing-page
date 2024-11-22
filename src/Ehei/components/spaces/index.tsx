import ClickIcon from "../../../components/icons/ClickIcon";
import StudentSpace from "../../assets/svgs/Library";
import LibrarySvg from "../../assets/svgs/LibrarySvg";
import "./styles.css";

function EheiSpacesSection() {
  return (
    <div id="ehei-spaces-section">
      <div className="ehei-space-section">
        <div className="ehei-space-section-illustration-container column">
          <StudentSpace className="ehei-space-section-illustration" />
        </div>
        <div className="ehei-space-section-metadata column">
          <h2 className="ehei-space-section-title">
            Syllab: Our virtual Space
          </h2>
          <p className="ehei-space-section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero assumenda error ab, sequi aspernatur rem maiores ullam enim
            dolore perferendis deleniti illo voluptate doloremque dolores nulla
            ipsum autem temporibus.
          </p>
          <a href="https://nassri.netlify.app" target="_blank" className="link">
            <ClickIcon className="link-icon" />
            Dive into..
          </a>
        </div>
      </div>
      <div className="ehei-space-section">
        <div className="ehei-space-section-metadata column">
          <h2 className="ehei-space-section-title">EHEI Library</h2>
          <p className="ehei-space-section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero assumenda error ab, sequi aspernatur rem maiores ullam enim
            dolore perferendis deleniti illo voluptate doloremque dolores nulla
            ipsum autem temporibus.
          </p>
          <a href="https://nassri.netlify.app" target="_blank" className="link">
            <ClickIcon className="link-icon" />
            Dive into..
          </a>
        </div>
        <div className="ehei-space-section-illustration-container column">
          <LibrarySvg className="ehei-space-section-illustration" />
        </div>
      </div>
    </div>
  );
}

export default EheiSpacesSection;
