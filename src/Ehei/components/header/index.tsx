import AtomIcon from "../../../components/icons/AtomIcon.tsx";
import BoxIcon from "../../../components/icons/BoxIcon.tsx";
import ClickIcon from "../../../components/icons/ClickIcon.tsx";
import DownChevronIcon from "../../../components/icons/DownChevronIcon.tsx";
import MessageDotIcon from "../../../components/icons/MessageDotIcon.tsx";
import ProfessorIcon from "../../../components/icons/ProfessorIcon.tsx";
import RulerAndPenIcon from "../../../components/icons/RulerAndPenIcon.tsx";
import TerminalIcon from "../../../components/icons/TerminalIcon.tsx";
import EheiTextLogo from "../Logo";
import "./styles.css";

function Header() {
  return (
    <header id="ehei-header">
      <a href="/" aria-hidden id="ehei-header-logo-button">
        <EheiTextLogo logoColor="#6c63ff" id="ehei-header-logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="" className="ehei-header-nav-button">
              <BoxIcon className="ehei-header-nav-button-icon" />
              Home
            </a>
          </li>
          <li>
            <button className="ehei-header-nav-button">
              <ProfessorIcon className="ehei-header-nav-button-icon" />
              Ehei
              <DownChevronIcon className="ehei-header-nav-collapse-chevron" />
            </button>
          </li>
          <li>
            <a href="" className="ehei-header-nav-button">
              <RulerAndPenIcon className="ehei-header-nav-button-icon" />
              Programs
              <DownChevronIcon className="ehei-header-nav-collapse-chevron" />
            </a>
          </li>
          <li>
            <a href="" className="ehei-header-nav-button">
              <ClickIcon className="ehei-header-nav-button-icon" />
              Admission
              <DownChevronIcon className="ehei-header-nav-collapse-chevron" />
            </a>
          </li>
          <li>
            <a href="" className="ehei-header-nav-button">
              <TerminalIcon className="ehei-header-nav-button-icon" />
              Activities
              <DownChevronIcon className="ehei-header-nav-collapse-chevron" />
            </a>
          </li>
          <li>
            <a href="" className="ehei-header-nav-button">
              <AtomIcon className="ehei-header-nav-button-icon" />
              Syllab
              <DownChevronIcon className="ehei-header-nav-collapse-chevron" />
            </a>
          </li>
          <li>
            <a href="" className="ehei-header-nav-button">
              <MessageDotIcon className="ehei-header-nav-button-icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
