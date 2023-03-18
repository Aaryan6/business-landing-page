import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsDribbble, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url(/contact-bg.png)" }}
      className="bg-cover bg-center pt-40 pb-0 md:pb-40 relative text-white"
    >
      <div className="text-center mb-10 px-10">
        <h5 className="text-green-500 font-bold tracking-wider text-sm md:text-base">
          CONTACT US
        </h5>
        <h1 className="text-white text-2xl md:text-5xl font-bold max-w-5xl md:max-w-4xl mx-auto leading-normal">
          Reach out for a new project or just say hello
        </h1>
      </div>
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <div className="bg-gray-800 bg-opacity-30 py-16 px-10 md:flex-1">
          <h5 className="font-semibold text-sm tracking-widest">
            SEND US A MESSAGE
          </h5>
          <form className="flex flex-col pt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent p-4 border-b-2 border-gray-700 outline-0 my-2"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-transparent p-4 border-b-2 border-gray-700 outline-0  my-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent p-4 border-b-2 border-gray-700 outline-0  my-2"
            />
            <textarea
              placeholder="Your Message"
              className="bg-transparent p-4 border-b-2 border-gray-700 outline-0  my-2 h-60"
            />
            <button className="bg-green-400 mt-2 text-sm font-semibold tracking-widest py-4">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="bg-gray-800 bg-opacity-90 px-10 py-16 w-full md:w-96">
          <h6 className="text-xs text-green-500 tracking-widest font-semibold">
            CONTACT INFO
          </h6>
          <div className="mt-16 flex flex-col">
            <h5 className="text-green-500 font-semibold mb-4">
              Where to Find Us
            </h5>
            <span className="font-light text-gray-300 mt-1">
              1600 Amphitheatre Parkway
            </span>
            <span className="font-light text-gray-300 mt-1">
              Mountain View, CA
            </span>
            <span className="font-light text-gray-300 mt-1">94043 US</span>
          </div>
          <div className="mt-10 flex flex-col">
            <h5 className="text-green-500 font-semibold mb-4">Email Us At</h5>
            <span className="font-light text-gray-300 mt-1">
              contact@glintsite.com
            </span>
            <span className="font-light text-gray-300 mt-1">
              info@glintsite.com
            </span>
          </div>
          <div className="mt-10 flex flex-col">
            <h5 className="text-green-500 font-semibold mb-4">Call Us At</h5>
            <span className="font-light text-gray-300 mt-1">
              Phone: (+63) 555 1212
            </span>
            <span className="font-light text-gray-300 mt-1">
              Mobile: (+63) 555 0100
            </span>
            <span className="font-light text-gray-300 mt-1">
              Fax: (+63) 555 0101
            </span>
          </div>
          <div className="flex justify-between w-2/3 mt-10 text-lg">
            <FaFacebookF className="cursor-pointer hover:scale-95 hover:text-green-500 duration-150" />
            <BsTwitter className="cursor-pointer hover:scale-95 hover:text-green-500 duration-150" />
            <BsInstagram className="cursor-pointer hover:scale-95 hover:text-green-500 duration-150" />
            <BsDribbble className="cursor-pointer hover:scale-95 hover:text-green-500 duration-150" />
            <BsWhatsapp className="cursor-pointer hover:scale-95 hover:text-green-500 duration-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
