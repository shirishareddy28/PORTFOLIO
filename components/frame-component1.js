import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-29xl text-darkslategray font-title-h2 mq750:gap-[19px] ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-center pt-3 px-5 pb-2.5 gap-[779px] text-left text-lg text-font-high-emphasis font-comfortaa lg:gap-[389px] mq450:gap-[97px] mq750:gap-[195px]">
        <b className="relative leading-[180%] font-bold whitespace-nowrap">
          Madelyn Torff
        </b>
        <div className="w-[291px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border mq450:w-0">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-lg text-font-high-emphasis font-body-18 mq450:hidden">
            <div className="w-[52px] flex flex-col items-start justify-start gap-[2px]">
              <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[52px]">
                About
              </a>
              <div className="self-stretch h-0.5 relative rounded-sm bg-font-high-emphasis" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[69px]">
                Projects
              </a>
            </div>
            <div className="flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[75px]">
                Contacts
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1200px] flex flex-row items-end justify-center gap-[88px] max-w-full lg:gap-[44px] mq750:gap-[22px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[105px] box-border min-w-[382px] min-h-[418px] max-w-full mq450:pb-[68px] mq450:box-border mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <b className="w-[486px] relative leading-[130%] font-bold inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
                About me
              </b>
              <div className="self-stretch relative text-5xl leading-[150%] font-nunito text-font-medium-emphasis mq450:text-lgi mq450:leading-[29px]">
                This is Sirisha, frontend and full stack developer who is curious about learning new things and working on it effeciently.Developing website and Web development is my special interest where i can put myself to the fullest.
              </div>
              <button className="cursor-pointer [border:none] py-2 px-6 bg-brand-yellow rounded-lg flex flex-row items-start justify-start hover:bg-darkgoldenrod">
                <div className="relative text-lg leading-[150%] font-medium font-roboto text-font-high-emphasis text-left inline-block min-w-[66px]">
                  Resume
                </div>
              </button>
            </div>
          </div>
          <div className="h-[524px] w-[524px] relative min-w-[524px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="absolute top-[0px] right-[0px] rounded-[50%] bg-brand-yellow w-full h-full" />
            <img
              className="absolute top-[0px] right-[0px] rounded-581xl w-full h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/pexelsartembeliaikin1832323removebgpreview@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
