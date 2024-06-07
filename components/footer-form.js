import FormGroupInput from "./form-group-input";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";

const FooterForm = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-[520px] pb-[240.5px] box-border relative gap-[80.5px] max-w-full text-center text-29xl text-font-high-emphasis font-title-h2 mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[40px] mq750:pl-[260px] mq750:pr-[260px] mq750:pb-[101px] mq750:box-border mq1050:pb-[156px] mq1050:box-border ${className}`}
    >
      <img
        className="w-full h-[344px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/vector.svg"
      />
      <div className="w-[377px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[181px] flex flex-col items-start justify-start gap-[4px]">
          <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-inherit mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
            Projects
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-10">
            <div className="h-1 flex-1 relative rounded-sm bg-brand-yellow" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px] z-[1] text-left text-base font-nunito mq450:gap-[28px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
          <FormGroupInput label="Name" />
          <FormGroupInput
            label="Email"
            propWidth="unset"
            propPadding="0px 3px 0px 0px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-11 flex flex-row items-start justify-start py-0 px-0 box-border">
              <b className="w-[65px] relative font-semibold inline-block shrink-0 [debug_commit:bf4bc93]">
                Message
              </b>
            </div>
            <textarea
              className="bg-bg-white h-40 w-auto [outline:none] self-stretch relative rounded-lg box-border overflow-hidden shrink-0 border-[1px] border-solid border-aliceblue"
              rows={8}
              cols={20}
            />
          </div>
          <button className="cursor-pointer [border:none] py-2 px-6 bg-brand-yellow rounded-lg flex flex-row items-start justify-start hover:bg-darkgoldenrod">
            <div className="relative text-lg leading-[150%] font-medium font-roboto text-font-high-emphasis text-left inline-block min-w-[41px]">
              Send
            </div>
          </button>
        </div>
        <FrameComponent />
      </div>
    </section>
  );
};

FooterForm.propTypes = {
  className: PropTypes.string,
};

export default FooterForm;
