import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="px-10 py-10 lg:px-20">
      <div className="container lg:flex border rounded-lg p-2 py-6 ">
        <div className="max-w-3xl ">
          <h2 className="font-bold mb-4 md:mb-8 text-5xl bg-clip-text text-transparent text-center  px-6 drop-shadow-2xl  bg-gradient-to-b from-white/80 to-white/90 max-w-2xl">
            About Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#4d229e]">
              Company
            </span>
          </h2>
          <p className="bg-clip-text text-transparent text-center font-bold px-6 drop-shadow-2xl text-xl bg-gradient-to-b from-white/80 to-white/90 max-w-2xl">
            At Haawks, we are revolutionizing the future of data storage. Our
            decentralized cloud platform ensures your data is not just
            stored—but safeguarded, secured, and controlled by you. With
            cutting-edge blockchain technology, we’re giving users and
            businesses the freedom to store, share, and manage their files
            without worrying about privacy or thirdparty interference.
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 lg:mt-0 lg:ml-6">
          <Image
            src="/chart.jpg"
            alt="About Our Company"
            className="max-w-full rounded-lg shadow-lg"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default About;