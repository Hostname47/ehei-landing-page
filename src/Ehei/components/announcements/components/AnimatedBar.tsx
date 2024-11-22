import Announcement from "./Announcement";
import { announcements } from "../../../../data";

function AnimatedBar() {
  return (
    <div id="ehei-announcements-container">
      {[
        ...announcements,
        ...announcements,
        ...announcements,
        ...announcements,
      ].map((a) => (
        <Announcement isLink={a.isLink} title={a.title} href={a.href} />
      ))}
    </div>
  );
}

export default AnimatedBar;
