import FrameComponent1 from "../components/frame-component1";
import FooterForm from "../components/footer-form";

const AboutWithForm = () => {
  return (
    <div className="w-full relative bg-bg-gray overflow-hidden flex flex-col items-start justify-start gap-[144px] leading-[normal] tracking-[normal] mq450:gap-[36px] mq750:gap-[72px]">
      <FrameComponent1 />
      <FooterForm />
    </div>
  );
};

export default AboutWithForm;
