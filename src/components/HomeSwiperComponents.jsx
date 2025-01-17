import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const HomeSwiperComponents = () => {
  return (
    <div className="p-5 max-w-7xl m-auto w-full">
      <div className="md:hidden md:-mt-5" data-aos="zoom-in" data-aos-duration="1500">
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-home h-96 rounded-2xl bg-cover"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black-secondary h-96 rounded-2xl flex flex-col items-center justify-center gap-2 w-full text-center">
              <h1 className="text-white text-4xl font-bold">100+</h1>
              <p className="text-white text-lg font-normal w-3/4">
                Our Esteemed Client and Partners
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-96 rounded-2xl bg-cover p-10 flex flex-col gap-3 justify-around">
              <MdOutlineSpaceDashboard className="bg-yellow-light text-black-secondary text-5xl rounded-md p-2" />
              <p className="flex items-center gap-3 text-black-secondary font-semibold">
                Total Projects <FaSquareArrowUpRight />{" "}
                <span className="text-sm">8%</span>
              </p>
              <h1 className="text-black-secondary text-6xl font-semibold">
                1951+
              </h1>
              <p className="text-sm font-normal text-gray-500">
                Increase of{" "}
                <span className="text-green-primary font-medium">126</span> this
                month
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-light h-96 rounded-2xl flex flex-col items-center justify-center gap-2 w-full text-center">
              <h1 className="text-black-secondary text-4xl font-bold">6+</h1>
              <p className="text-black-secondary text-lg font-normal w-3/4">
                Years Of Dedicated Serviced
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:flex flex-row gap-5 items-end hidden -mt-10" data-aos="zoom-in" data-aos-duration="1500">
        <div className="bg-home h-80 rounded-2xl bg-cover w-full"></div>
        <div className="bg-black-secondary h-64 rounded-2xl flex flex-col items-center justify-center gap-2 w-full text-center">
          <h1 className="text-white text-4xl font-bold">100+</h1>
          <p className="text-white text-lg font-normal w-3/4">
            Our Esteemed Client and Partners
          </p>
        </div>
        <div className="bg-white h-52 rounded-2xl bg-cover p-5 flex flex-col gap-1 justify-around lg:w-full">
          <MdOutlineSpaceDashboard className="bg-yellow-light text-black-secondary text-5xl rounded-md p-2" />
          <p className="flex items-center gap-3 text-black-secondary font-semibold">
            Total Projects <FaSquareArrowUpRight />{" "}
            <span className="text-sm">8%</span>
          </p>
          <h1 className="text-black-secondary text-3xl font-semibold">1951+</h1>
          <p className="text-sm font-normal text-gray-500">
            Increase of{" "}
            <span className="text-green-primary font-medium">126</span> this
            month
          </p>
        </div>
        <div className="bg-yellow-light h-64 rounded-2xl flex flex-col items-center justify-center gap-2 w-full text-center">
          <h1 className="text-black-secondary text-4xl font-bold">6+</h1>
          <p className="text-black-secondary text-lg font-normal w-3/4">
            Years Of Dedicated Serviced
          </p>
        </div>
        <div className="bg-home h-80 rounded-2xl bg-cover w-full"></div>
      </div>
    </div>
  );
};

export default HomeSwiperComponents;
