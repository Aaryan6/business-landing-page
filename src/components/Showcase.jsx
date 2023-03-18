import Gallery from "./Gallery";
import "animate.css";

const Showcase = () => {
  return (
    <div className="bg-white pb-32">
      <div className="bg-gray-900 -z-10 py-40 text-white text-center px-10 animate__animated animate__fadeInUpBig">
        <h3 className="font-bold text-sm md:text-base tracking-wider text-green-600 wow animate__animated animate__fadeInUpBig">
          RECENT WORKS
        </h3>
        <h1 className="text-2xl md:text-5xl font-bold max-w-4xl mx-auto leading-normal wow animate__animated animate__fadeInUpBig">
          We love what we do, check out some of our latest works
        </h1>
        <hr className="max-w-xl mx-auto mt-10 mb-20" />
      </div>
      <Gallery />
    </div>
  );
};

export default Showcase;
