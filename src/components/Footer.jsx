import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-10">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="max-w-lg">
          <h2 className="text-green-500 font-bold text-3xl text-center md:text-left">
            Glint.
          </h2>
          <p className="mt-8 mb-8 md:mb-0 text-gray-400 ">
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </div>
        <div className="max-w-lg">
          <h4 className="text-sm font-bold tracking-widest">Get Notified</h4>
          <p className="mt-4 text-gray-400">
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>
          <div className="mt-10 relative md:h-12 flex flex-col md:flex-row">
            <HiOutlineMail className="absolute text-2xl left-3 top-3" />
            <input
              type="text"
              placeholder="Email Address"
              className="text-sm pl-12 pr-2 py-4 outline-0 bg-gray-800 h-full"
            />
            <button className="bg-green-400 h-full text-sm font-semibold tracking-widest px-4 py-3 w-full md:w-fit">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 flex justify-between flex-wrap max-w-sm mx-auto text-sm text-gray-400">
        <span>&copy; Copyright Glint 2022</span>
        <span>Site Template by Colorlib</span>
      </div>
    </div>
  );
};

export default Footer;
