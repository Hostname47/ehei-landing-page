import LogoIcon from "../../../../components/icons/LogoIcon";

interface AnnouncementProps {
  title: string;
  href?: string;
  isLink: boolean;
}

function Announcement({ title, isLink, href }: AnnouncementProps) {
  return (
    <div className="ehei-announcement-container">
      <LogoIcon className="ehei-announcement-icon" />
      {isLink ? (
        <a href={href} className="ehei-announcement-text">
          {title}
        </a>
      ) : (
        <span className="ehei-announcement-text">{title}</span>
      )}
    </div>
  );
}

export default Announcement;
