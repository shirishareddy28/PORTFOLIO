import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-base text-font-medium-emphasis font-nunito ${className}`}
    >
      <div
        className="w-48 flex flex-col items-start justify-start gap-[32px]"
        data-scroll-to="footerIcons"
      >
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-12 w-12 relative overflow-hidden shrink-0 min-h-[48px]"
            loading="lazy"
            alt=""
            src="/phinstagramlogofill.svg"
          />
          <img
            className="h-12 w-12 relative overflow-hidden shrink-0 min-h-[48px]"
            loading="lazy"
            alt=""
            src="/bilinkedin.svg"
          />
          <img
            className="h-12 w-12 relative overflow-hidden shrink-0 min-h-[48px]"
            loading="lazy"
            alt=""
            src="/bienvelopefill.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-6">
          <div className="relative">{`Madelyn Torff 2021 `}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
