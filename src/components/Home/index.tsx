import { useNavigate } from "react-router";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NewNails from "./NewNails";
import TopDesign from "./TopDesign";
import NewLetter from "../Newsletter";




const Hero = () => {
  const naviagte = useNavigate();
  return (
    <section id="home" className="">
      <div className="w-full h-dvh absolute top-0 -z-50">
        <Fade arrows={false} duration={4000} canSwipe={true}>
        <div className=" bg-center  bg-slide-1 bg-no-repeat bg-cover w-full h-dvh md:py-52 py-28 px-10 md:pl-48">
          <div className="px-6 py-5 border-black w-[300px]  md:w-[450px]  shadow-lg rounded-sm bg-white text-black">
            <span className=" font-bold text-2xl uppercase  text-gray-600">
              the best design
            </span>
            <h2 className="mt-5 font-extrabold text-[48px] uppercase">
              the work of art
            </h2>
            <p className=" text-primary-100 text-lg leading-loose w-5/6 my-5 font-bold">
              {" "}
              Beyond manicures and pedicures, we are artists who translate our
              vision onto clients' fingertips, enabling them to express their
              personal style and creativity through unique, customized nail
              designs.
            </p>
            <button
              onClick={() => {
                naviagte("/catalogue");
                scrollTo(0, 0);
              }}
              className="delay-300 px-14 py-4 capitalize text-xl rounded-sm text-white bg-secondary-200 hover:bg-secondary-100 transition-all ease-linear duration-500"
            >
              check out now
            </button>
          </div>
        </div>
        <div className=" bg-center  bg-slide-2 bg-no-repeat bg-cover w-full h-dvh md:py-52 py-28 px-10 md:pl-48">
          <div className="px-6 py-5 border-black w-[300px]  md:w-[450px]  shadow-lg rounded-sm bg-white text-black">
            <span className=" font-bold text-2xl uppercase  text-gray-600">
              the language of beauty
            </span>
            <h2 className="mt-5 font-extrabold text-[48px] uppercase">
              the work of passion
            </h2>
            <p className=" text-primary-100 text-lg leading-loose w-5/6 my-5 font-bold">
              Each stroke, hue blend, and the joy of turning a client's vision
              into wearable art makes nails a canvas for creativity. With every
              brushstroke, we connect through beauty and uniqueness.
            </p>
            <button
              className="delay-300  px-14 py-4 capitalize text-xl rounded-sm text-white bg-secondary-200 hover:bg-secondary-100 transition-all ease-linear duration-500"
              onClick={() => {
                naviagte("/catalogue");
                scrollTo(0, 0);
              }}
            >
              Discover now
            </button>
          </div>
        </div>
        <div className=" bg-center  bg-slide-3 bg-no-repeat bg-cover w-full h-dvh md:py-52 py-28 px-10 md:pl-48">
          <div className="px-6 py-5 border-black w-[300px]  md:w-[450px]  shadow-lg rounded-sm bg-white text-black">
            <span className=" font-bold text-2xl uppercase  text-gray-600">
              the land of beauty
            </span>
            <h2 className="mt-5 font-extrabold text-[48px] uppercase">
              the gate way to beauty
            </h2>
            <p className=" text-primary-100 text-lg leading-loose w-5/6 my-5 font-bold">
              Salons are sanctuaries where self-care and artistry unite,
              transforming nails, moods, and confidence. Beauty is redefined
              through elegant designs that leave clients feeling polished,
              empowered, and radiant.
            </p>
            <button
              className="delay-300  px-14 py-4 capitalize text-xl rounded-sm text-white bg-secondary-200 hover:bg-secondary-100 transition-all ease-linear duration-500"
              onClick={() => {
                naviagte("/catalogue");
                scrollTo(0, 0);
              }}
            >
              explore now
            </button>
          </div>
        </div>
      </Fade>

      </div>
      
      <NewNails />
      <TopDesign />
      <NewLetter />

    </section>
  );
};

export default Hero;
