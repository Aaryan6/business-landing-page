import { Lora } from "next/font/google";
import "animate.css";

const lora = Lora({ subsets: ["latin"] });

const About = () => {
  return (
    <div className="bg-green-500 text-white text-center py-40 px-10">
      <div className="">
        <h4 className="text-black font-bold mb-4 tracking-widest wow animate__animated animate__fadeInUpBig">
          HELLO THERE
        </h4>
        <h1 className="text-5xl md:text-6xl font-bold wow animate__animated animate__fadeInUpBig">
          We Are Glint
        </h1>
        <hr className="max-w-lg mx-auto mt-16 mb-10" />
        <p
          className={`text-xl md:text-2xl text-black leading-relaxed max-w-5xl mx-auto ${lora.className} wow animate__animated animate__fadeInUpBig`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
        <div className="flex flex-col md:flex-row max-w-6xl justify-items-stretch items-stretch mx-auto mt-16">
          <div className="border-r-0 border-b-2 md:border-r-2 md:border-b-0 py-4 md:py-0 w-full wow animate__animated animate__fadeInUpBig">
            <h1 className="text-7xl font-bold">127</h1>
            <p className="text-black font-bold mt-2">Awards Received</p>
          </div>
          <div className="border-r-0 border-b-2 md:border-r-2 md:border-b-0 py-4 md:py-0 w-full wow animate__animated animate__fadeInUpBig">
            <h1 className="text-7xl font-bold">1505</h1>
            <p className="text-black font-bold mt-2">Cups of Coffe</p>
          </div>
          <div className="border-r-0 border-b-2 md:border-r-2 md:border-b-0 py-4 md:py-0 w-full wow animate__animated animate__fadeInUpBig">
            <h1 className="text-7xl font-bold">109</h1>
            <p className="text-black font-bold mt-2">Projects Complete</p>
          </div>
          <div className="py-4 md:py-0 w-full wow animate__animated animate__fadeInUpBig">
            <h1 className="text-7xl font-bold">102</h1>
            <p className="text-black font-bold mt-2">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
