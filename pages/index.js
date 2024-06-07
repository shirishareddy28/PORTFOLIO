import Header from "../components/header";
import AboutMe from "../components/about-me";
import FrameComponent from "../components/frame-component";

const AboutSimpleFooter = () => {
  return (
    <div className="w-full relative bg-bg-gray overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[38px] leading-[normal] tracking-[normal] mq750:gap-[19px]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[144px] max-w-full lg:gap-[72px] mq450:gap-[18px] mq750:gap-[36px]">
          <div className="self-stretch flex flex-row items-end justify-start gap-[88px] max-w-full lg:gap-[44px] mq750:gap-[22px] mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border min-w-[382px] min-h-[419px] max-w-full mq450:pb-[62px] mq450:box-border mq450:min-w-full">
              <AboutMe />
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
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default AboutSimpleFooter;
