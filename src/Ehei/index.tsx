import Announcements from "./components/announcements";
import EheiBranchesSection from "./components/branches";
import EheiContactSection from "./components/contact";
import EheiFooter from "./components/footer";
import Header from "./components/header";
import EheiMetadata from "./components/metadata";
import SectionSeparator from "./components/SectionSeparator";
import EheiSpacesSection from "./components/spaces";
import UnderHeaderSection from "./components/UnderHeaderSection";
import "./styles.css";

function Ehei() {
  return (
    <div id="ehei-landing-page">
      <Header />
      <Announcements />
      <UnderHeaderSection />
      <EheiMetadata />
      <EheiBranchesSection />
      <SectionSeparator />
      <EheiSpacesSection />
      <SectionSeparator />
      <EheiContactSection />
      <EheiFooter />
    </div>
  );
}

export default Ehei;
