import { TbNorthStar } from "react-icons/tb";
import { IoBookmarksOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { LuShieldHalf } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
const ServiceComponents = () => {
  const service = [
    {
      icon: TbNorthStar,
      title: "Production and assembly",
      text: "Details on production processes, assembly, capicity, and product types",
    },
    {
      icon: IoBookmarksOutline,
      title: "Custom Manufacturing",
      text: "Details on production processes, assembly, capicity, and product types",
    },
    {
      icon: SlSettings,
      title: "Quality Control",
      text: "Details on production processes, assembly, capicity, and product types",
    },
    {
      icon: LuShieldHalf,
      title: "Technology and inovation",
      text: "Details on production processes, assembly, capicity, and product types",
    },
    {
      icon: BsBox,
      title: "Packaging and logistics",
      text: "Details on production processes, assembly, capicity, and product types",
    },
    {
      icon: BsClipboardData,
      title: "consulting market research",
      text: "Details on production processes, assembly, capicity, and product types",
    },
  ];
  return (
    <div className="bg-black-secondary mt-5 md:mt-10">
      <div className="px-5 max-w-7xl gap-10 m-auto py-12 flex flex-col items-center w-full md:py-20">
        <div className="flex flex-col gap-2 text-center items-center">
          <h1 className="text-white font-bold text-2xl md:text-4xl md:w-3/5">
            Eficient and integrated manufacturing services
          </h1>
          <p className="text-white tracking-wide font-normal text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-10 justify-around w-full sm:flex-row sm:flex-wrap">
          {service.map((item) => (
            <div
              key={item.title}
              className="bg-service shadow-lg  w-full p-7 h-60  flex flex-col justify-between sm:w-72 lg:w-96"
            >
              <item.icon className="text-white text-5xl" />
              <div className="flex flex-col gap-1">
                <h1 className="text-white font-semibold">{item.title}</h1>
                <p className="text-sm text-gray-400 tracking-wide">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponents;
