import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Mouse from "../public/assets/icons/mouse.svg";
import IconText from "../components/IconText";
import DocumentIcon from "../public/assets/icons/document-download.svg";
import User from "../public/assets/icons/user-icon.svg";
import Stats from "../public/assets/icons/stats.svg";
import matchSnapshot from "../public/assets/images/matchSnapshot.svg";
import mapSnapshot from "../public/assets/images/mapSnapshot.svg";
import DownloadNow from "../components/DownloadNow";
import { useScroll } from "../context/ScrollContext";
import IconTextCard from "../components/IconTextCard";
import ShieldText from "../components/ShieldText";
import FeaturesCard from "../components/FeaturesCard";
import {
  cardsData,
  iconAndText1,
  iconAndText2,
  featuresData,
} from "../data/cardsData";

export default function Home() {
  const { scroll, setScrollToFeatures, scrollNav, whiteNav, scrollToFeatures } =
    useScroll();
  const aboutRef = useRef();
  const waitingListRef = useRef();
  const router = useRouter();
  const [word, setWord] = useState("Discover");
  const [name, setName] = useState("videographers");
  const titles = [
    "content creators",
    "photographers",
    "videographers",
    "musicians",
  ];
  const words = ["Collab with", "Partner with", "Match with", "Discover"];

  useEffect(() => {
    if (scrollToFeatures) {
      window.scrollTo({
        top: aboutRef.current.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
      setScrollToFeatures(false);
    }
  }, [scrollToFeatures, setScrollToFeatures, router]);

  const scrollToList = () => {
    window.scrollTo({
      top: waitingListRef.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToFeaturesSection = () => {
    router.push("/", "/#about");
    setScrollToFeatures(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const index = titles.indexOf(name);
      const wordIndex = words.indexOf(word);
      if (index === titles.length - 1) {
        setName(titles[0]);
      } else {
        setName(titles[index + 1]);
      }
      if (wordIndex === words.length - 1) {
        setWord(words[0]);
      } else {
        setWord(words[wordIndex + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [name, word]);

  return (
    <div className="">
      <Head>
        <title>
          Noted | For Photographers, Content Creators, Musicians, Videographers
          and Creatives
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Connect and Collaborate with creators from everywhere across the globe. Discover how!"
        />
        <meta
          name="keywords"
          content="artists, photography, Photographers, Content Creators, Musicians, Videographers, Creatives"
        />
      </Head>
      <main className="snap-y scroll-pt-[2rem]" onScroll={scrollNav}>
        <section className="relative h-auto bg-heroImg bg-cover bg-center bg-no-repeat fold:h-[84.5vh] s22:h-[93.5vh] i11Pro:h-[84.5vh] i13:h-[86.5vh] XR:h-[94.5vh] i14Max:h-[76vh] dualFold:h-[100vh] md:h-screen">
          <div className="flex h-full flex-col items-center justify-end bg-overlay px-2 pt-[2.9rem] pb-[4.5rem] fold:px-4 fold:pt-0 md:justify-center">
            <div className="mb-4 flex flex-col gap-4 text-center fold:mb-8 dualFold:w-[60%] md:mb-10 md:w-[79%] fold2Full:w-[82%] xl:w-[60.5%] laptops:w-[65%] bigScreen:w-[60%]">
              <Heading
                firstContent={"Connect with"}
                endContent={"from everywhere across the globe"}
                coloredContent={name}
                classes="font-bold text-white text-[0.875rem] fold:text-[1.4rem] s22:text-[2rem] XR:text-[2.2rem] i14Max:text-[2.3rem] leading-[1.2] md:hidden"
              />
              <Heading
                firstColoredContent={word}
                endContent={"hidden creatives around the world using Noted"}
                classes="font-bold text-white text-[2rem] fold2Full:text-[2.5rem] 2xl:text-[3rem] bigScreen:text-[3.5rem] leading-[1.27] hidden md:block"
              />
              <Subheading
                classes="text-neutrals200 s22:leading-[23.5px] i11Pro:leading-[25px] XR:leading-[25.5px] fold:text-[0.7rem] s22:text-[0.9rem] i11Pro:text-[0.9rem] i13:text-[1rem] i14Max:text-[1.1rem] fold:block md:hidden"
                content="Search, Collaborate, Create - Connect with fellow creators on our app designed for photographers,  musicians, and more. Join the waiting list to get notified of our release!"
              />
              <Subheading
                classes="text-neutrals100 leading-[28.5px] md:text-[1.125rem] md:w-[85%] iPadAir:w-[90%] md:mx-auto bigScreen:text-[2rem] bigScreen:leading-[1.3] hidden md:block"
                content="Search, Collaborate, Create - Connect with fellow creators on our app designed for photographers, videographers, musicians, and more. Join the waiting list to get notified of our release!"
              />
            </div>
            <div className="lg:[47%] mx-auto flex flex-col justify-center gap-3 fold:w-full dualFold:w-[65%] dualFold:flex-row dualFold:gap-6 md:w-[65%] xl:w-[38%]">
              <Button
                onClick={scrollToList}
                label="Join the waiting list"
                className="ease-in-out] mx-auto w-[92%] rounded border-[1px] border-brandPrimary500 bg-brandPrimary500 py-[8px] text-[0.65rem] font-semibold text-white transition duration-300 fold:w-[80%] fold:py-2 fold:text-[0.75rem] s22:py-3 s22:text-[1rem] dualFold:w-[100%] md:w-[100%] lg:w-[85%] lg:hover:bg-transparent lg:hover:text-brandPrimary400 xl:w-[%] bigScreen:w-[15] bigScreen:py-4 bigScreen:text-[1.5rem]"
              />
              <Button
                onClick={scrollToFeaturesSection}
                label="Learn more"
                className="ease-in-out] mx-auto w-[92%] rounded border-[1px] border-brandPrimary500 bg-transparent py-[8px] text-[0.65rem] font-semibold text-brandPrimary400 transition duration-300 fold:w-[80%] fold:py-2 fold:text-[0.75rem] s22:py-3 s22:text-[1rem] dualFold:w-[100%] md:w-[100%] lg:w-[85%] lg:hover:bg-brandPrimary500 lg:hover:text-white xl:w-[%] bigScreen:w-[15] bigScreen:py-4 bigScreen:text-[1.5rem]"
              />
            </div>
          </div>
          {!whiteNav && (
            <div className="scroll-btn absolute bottom-[1rem] z-10 hidden w-full flex-col justify-center gap-3 md:flex">
              <button className="mx-auto" onClick={scroll}>
                <Image
                  src={Mouse}
                  alt="Clickable icon to scroll down to see main content"
                  className="animate-bounce-slow motion-safe:animate-bounce-slower"
                />
              </button>
              <p className="text-center text-base font-bold text-white/[0.6] lg:text-xl bigScreen:text-[1.6rem]">
                Scroll for more info
              </p>
            </div>
          )}
        </section>
        <section className="bg-brandPrimary400 p-4 dualFold:p-[2.5rem] lg:p-[3rem] xl:p-[5rem]">
          <div className="flex flex-col items-center justify-center gap-4 fold:gap-6 dualFold:flex-row dualFold:justify-between  bigScreen:mx-auto bigScreen:w-[90%]">
            <IconText
              className="gap-2 fold:gap-4 lg:flex-row lg:items-center"
              src={DocumentIcon}
              imgClassName="bg-white"
              textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
              alt="An icon representing downloads"
              text="500+ Downloads"
              imgClass="md:w-[28px] lg:w-[32px]"
            />
            <IconText
              className="gap-2 fold:gap-4 lg:flex-row lg:items-center"
              src={User}
              imgClassName="bg-white"
              textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
              alt="An icon representing downloads"
              text="403+ Active Users"
              imgClass="md:w-[28px] lg:w-[32px]"
            />
            <IconText
              className="gap-2 fold:gap-4 lg:flex-row lg:items-center"
              src={Stats}
              imgClassName="bg-white"
              textClassName="font-bold  text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
              alt="An icon representing downloads"
              text="8590+ Usage Statistics"
              imgClass="md:w-[28px] lg:w-[32px]"
            />
          </div>
        </section>
        <section className="p-4 py-[3rem] text-center">
          <div className="mx-auto md:w-[90%] xl:w-[80%]">
            <div className="items-center justify-between md:mb-0 md:flex">
              <div className="mb-[3rem] md:mb-0 md:w-[50%] md:text-left xl:w-[50%]">
                <h2 className="mb-[1.25rem] text-[0.75rem] font-bold leading-[1.1] text-neutrals500 s22:text-[2rem] xl:text-[3rem]">
                  Easily connect with Creatives globally
                </h2>
                <p className="text-[0.6rem] font-semibold leading-[25.6px] fold:text-[1rem] i14Max:px-5 md:px-0 md:text-[1rem] lg:text-[1rem] xl:w-[80%] bigScreen:px-0">
                  Let&apos;s help you find the best talent to work with from
                  anywhere in the world.
                </p>
              </div>
              <div className="relative space-y-2 bg-brandPrimary50 p-4 text-left md:w-[40%]">
                <p className="text-sm leading-[1.7]">
                  Content is all around us in some shape or form. We feel as if
                  the average content creator is unappreciated and that the best
                  artist are oftentimes hidden gems. Noted was created to
                  excavate these gems and put them on full display.
                </p>
                <p className="text-sm font-semibold">
                  Jamari McNabb - Founder, Noted Media
                </p>
                <span className="absolute top-[-2.5rem] left-0 text-[4rem] font-bold text-brandPrimary500">
                  “
                </span>
                <span className="absolute bottom-[-2rem] right-0 rotate-180 text-[4rem] font-bold text-brandPrimary500">
                  “
                </span>
              </div>
            </div>
            <div className="mt-[3rem] flex flex-col flex-wrap gap-6 md:mt-[4rem] md:flex-row md:justify-center xl:flex-nowrap xl:justify-between">
              {cardsData.map(({ image, num, heading, desc }) => (
                <IconTextCard
                  image={image}
                  num={num}
                  heading={heading}
                  desc={desc}
                  key={num}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          ref={aboutRef}
          className="overflow-hidden bg-neutrals500 px-4 py-[3rem] pb-[4.5rem] text-white"
        >
          <div className="mx-auto md:w-[90%] xl:w-[75%]">
            <div className="flex flex-col gap-6 md:flex-row-reverse md:items-center md:justify-between">
              <div className="space-y-6 text-center md:w-[53%] md:text-left lg:w-[60%]">
                <h2 className="text-[2rem] font-bold leading-[1.2] lg:text-[3rem]">
                  Match with the best creatives
                </h2>
                <p className="font-semibold leading-[25.6px] md:font-medium">
                  With just a simple swipe you can get the ground running with
                  the best creative on our networks of talented creatives right
                  from your device
                </p>
                <div className="space-y-3 border-t-2 pt-7 text-left">
                  {iconAndText1.map(({ image, text }, index) => (
                    <ShieldText key={index} image={image} desc={text} />
                  ))}
                </div>
              </div>

              <div className=" border-t-brandPrimary100 py-[1.9rem]">
                <div className="relative mt-8 flex flex-col items-center">
                  <div className="absolute top-1/2 z-[2] aspect-square w-[390px] translate-y-[-50%] rounded-full bg-brandPrimary100/[0.1] blur-[95.5px]"></div>
                  <div className="absolute top-[23rem] -left-[4rem] z-[1] h-[180px] w-[350px] rotate-[227deg] rounded-t-[280px] bg-brandPrimary600/[0.1] md:-left-[7rem]"></div>
                  <Image src={matchSnapshot} alt="" className="z-[3]" />
                </div>
              </div>
            </div>
            <div className="mt-[5rem] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-5 text-center md:w-[53%] md:text-left lg:w-[60%]">
                <h2 className="text-[2rem] font-bold leading-[1.2] lg:text-[3rem]">
                  Explore the amazing map features
                </h2>
                <p className="font-semibold leading-[25.6px] md:font-medium">
                  Connect with the best creative on our networks of talented
                  creatives right from your device with our map feature
                </p>
                <div className="space-y-3 border-t-2 border-t-brandPrimary100 pt-7 text-left xl:w-[70%]">
                  {iconAndText2.map(({ image, text }, index) => (
                    <ShieldText key={index} image={image} desc={text} />
                  ))}
                </div>
              </div>
              <div className="py-[1.9rem]">
                <div className="relative mt-8 flex flex-col items-center ">
                  <div className="absolute top-1/2 z-[2] aspect-square w-[390px] translate-y-[-50%] rounded-full bg-brandPrimary100/[0.1] blur-[95.5px]"></div>
                  <div className="absolute top-[23rem] -right-[7rem] z-[1] h-[180px] w-[350px] rotate-[-227deg] rounded-t-[280px] bg-brandPrimary600/[0.1]"></div>
                  <Image src={mapSnapshot} alt="" className="z-[3]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-[3rem] md:bg-brandPrimary50 md:py-[4rem]">
          <div className="mx-auto md:w-[90%] xl:w-[80%]">
            <h2 className="mx-auto mb-[1.25rem] text-center text-[0.75rem] font-bold leading-[1.1] text-neutrals500 s22:text-[2rem] lg:mb-[2rem] lg:w-1/2 xl:ml-0 xl:w-[50%] xl:text-start xl:text-[3rem] xl:leading-[1.3]">
              Other amazing features you want to know about
            </h2>
            <div className="mt-6 flex flex-col flex-wrap gap-6 md:flex-row md:justify-center xl:flex-nowrap xl:justify-between">
              {featuresData.map(({ image, heading, desc, num }, index) => (
                <FeaturesCard
                  image={image}
                  heading={heading}
                  alt={num}
                  desc={desc}
                  key={heading}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          ref={waitingListRef}
          id="waiting-list"
          className="snap-center bg-neutrals500 px-4 pt-[3rem]"
        >
          <div className="mx-auto md:w-[90%] xl:w-[80%]">
            <DownloadNow classes="" content="" />
          </div>
        </section>
      </main>
    </div>
  );
}
