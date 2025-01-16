import benefit from "../assets/images/section.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
const BenefitsComponents = () => {
  const benefits = [
    {
      name: "Boosting Quality with Tech",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facere. Recusandae deserunt delectus reprehenderit vel?",
    },
    {
      name: "Optimization Production Process",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facere. Recusandae deserunt delectus reprehenderit vel?",
    },
    {
      name: "AI-Driven Production",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facere. Recusandae deserunt delectus reprehenderit vel?",
    },
  ];
  return (
    <div className="p-5 py-10 max-w-7xl m-auto w-full flex flex-col gap-10 md:flex-row md:items-center">
      <div className="bg-slate-100 p-5 h-max rounded-2xl flex items-center justify-center w-full">
        <img src={benefit} alt="" />
      </div>
      <div className="flex flex-col gap-2 w-full lg:gap-4">
        <h1 className="text-black-secondary font-bold text-2xl
        lg:text-4xl">
          Key Benefits of our System for Your Businness Efficiencys
        </h1>
        <p className="text-sm font-normal text-gray-500 tracking-wide 
        lg:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          molestias.
        </p>
        <div className="flex flex-col gap-4 mt-5">
          {benefits.map((item) => (
            <div className="flex flex-col gap-2" key={item.name}>
              <h1 className="font-bold text-black-primary flex items-center gap-1 lg:text-xl">
                {item.name} <IoCheckmarkCircle />
              </h1>
              <p className="text-sm font-normal text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponents;
