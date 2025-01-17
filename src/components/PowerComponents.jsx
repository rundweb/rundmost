import benefit from "../assets/images/section.svg";

const PowerComponents = () => {
  return (
    <div className="p-5 py-10 max-w-7xl m-auto w-full flex flex-col gap-10 md:flex-row md:items-center">
      <div className="flex flex-col gap-2 w-full lg:gap-4" 
      data-aos="zoom-in-right" data-aos-duration="1500">
        <h1
          className="text-black-secondary font-bold text-2xl
            lg:text-4xl"
        >
          Empowering Top Companies with seamless integrations
        </h1>
        <p
          className="text-sm font-normal text-gray-500 tracking-wide 
            lg:text-base"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          asperiores nisi quo commodi doloremque soluta eius explicabo mollitia
          voluptas quasi.
        </p>
        <a href="" className="bg-green-primary w-max px-10 text-white text-base font-semibold rounded-3xl py-3 mt-4">Work With Us</a>
      </div>
      <div className="bg-slate-100 p-5 h-max rounded-2xl flex items-center justify-center w-full" 
      data-aos="zoom-in" data-aos-duration="1500">
        <img src={benefit} alt="" />
      </div>
    </div>
  );
};

export default PowerComponents;
