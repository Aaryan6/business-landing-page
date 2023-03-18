import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 max-w-6xl mx-auto -mt-44">
      <div className="">
        <div className="aspect-square overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/photography.jpg"
            className="h-full scale-110 object-cover object-center"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="aspect-square overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/car.jpg"
            className="object-center object-cover h-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-[54rem] overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/guitar.jpg"
            className="object-center object-cover h-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="">
        <div className="aspect-square md:aspect-auto md:h-[54rem] overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/chair.jpg"
            className="object-center object-cover h-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="aspect-square overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/plant.jpg"
            className="object-center object-cover h-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="aspect-square overflow-hidden wow animate__animated animate__fadeInUpBig">
          <Image
            src="/leaves.jpg"
            className="object-center object-cover h-full"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
