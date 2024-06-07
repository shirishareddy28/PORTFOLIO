import { useCallback } from "react";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const onMadelynTorffTextClick = useCallback(() => {
    // Please sync "Portfolio - Simple Footer" to the project
  }, []);

  const onTabDefaultClick = useCallback(() => {
    // Please sync "Portfolio - Simple Footer" to the project
  }, []);

  const onSobreText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerIcons']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-3 px-5 pb-2.5 gap-[779px] text-left text-lg text-font-high-emphasis font-comfortaa lg:gap-[389px] mq450:gap-[97px] mq750:gap-[195px] ${className}`}
    >
      <b
        className="relative leading-[180%] font-bold whitespace-nowrap cursor-pointer"
        onClick={onMadelynTorffTextClick}
      >
     B SIRISHA
      </b>
      <div className="w-[291px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border mq450:w-0">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-lg text-font-high-emphasis font-body-18 mq450:hidden">
          <div className="w-[52px] flex flex-col items-start justify-start gap-[2px]">
            <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[52px]">
              About
            </a>
            <div className="self-stretch h-0.5 relative rounded-sm bg-font-high-emphasis" />
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={onTabDefaultClick}
          >
            <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[69px]">
              Projects
            </a>
          </div>
          <div className="flex flex-row items-start justify-start">
            <a
              className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[75px] cursor-pointer"
              onClick={onSobreText2Click}
            >
              Contacts
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
