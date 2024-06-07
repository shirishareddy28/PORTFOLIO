import PropTypes from "prop-types";

const AboutMe = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-29xl text-font-high-emphasis font-title-h2 mq750:gap-[16px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-bold font-inherit mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
        About me
      </h1>
      <div className="self-stretch relative text-5xl leading-[150%] font-nunito text-font-medium-emphasis mq450:text-lgi mq450:leading-[29px]">
        Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
        neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras
        sed. Aliquet risus posuere aliquet imperdiet sit.
      </div>
      <button className="cursor-pointer [border:none] py-2 px-6 bg-brand-yellow rounded-lg flex flex-row items-start justify-start hover:bg-darkgoldenrod">
        <div className="relative text-lg leading-[150%] font-medium font-roboto text-font-high-emphasis text-left inline-block min-w-[66px]">
          Resume
        </div>
      </button>
    </div>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
};

export default AboutMe;
