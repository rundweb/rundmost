const PlantComponents = () => {
  return (
    <div className="bg-[#0B0F12]">
      <div className="p-5 max-w-7xl m-auto w-full flex flex-col items-center justify-around py-14 gap-7 ">
        <div
          className="flex flex-col text-center gap-3 items-center mb-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:w-3/5">
            Tailored Plants for your manufacturing scale
          </h1>
          <p className="text-gray-200 text-sm tracking-wide font-normal md:text-lg">
            Flexible pricing for any business size.
          </p>
        </div>
        <div className="flex flex-col gap-7 justify-around md:flex-row">
          <div
            className="bg-black-primary rounded-3xl px-5 py-10 flex flex-col gap-4 shadow-xl max-w-96 lg:px-7"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h1 className="text-xl text-white font-semibold tracking-wide md:text-3xl">
              Starter
            </h1>
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <h3 className="text-white text-2xl font-semibold mt-2 md:text-3xl">
              $39{" "}
              <span className="text-gray-200 text-base font-normal">
                / month
              </span>
            </h3>
            <a
              href=""
              className="w-full border-2 text-center p-2 rounded-3xl text-white font-semibold tracking-wide text-base my-2"
            >
              Get Started
            </a>
            <div className="flex flex-row gap-5 justify-between items-center my-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-gray-200 tracking-wide text-base">Features</p>
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                Production up to 10.000 units per month
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                24/7 technical support
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                Access the Production dashboard
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                initial setup guide
              </p>
            </div>
          </div>
          <div
            className="bg-black-primary rounded-3xl px-5 py-7 flex flex-col gap-4 shadow-xl max-w-96 lg:px-7"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h1 className="text-xl text-white font-semibold tracking-wide md:text-3xl">
              Enterprise
            </h1>
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <h3 className="text-white text-2xl font-semibold mt-2 md:text-3xl">
              $99{" "}
              <span className="text-gray-200 text-base font-normal">
                / month
              </span>
            </h3>
            <a
              href=""
              className="w-full border-2 text-center p-2 rounded-3xl text-white font-semibold tracking-wide text-base my-2"
            >
              Get Started
            </a>
            <div className="flex flex-row gap-5 justify-between items-center my-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-gray-200 tracking-wide text-base">Features</p>
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                Production up to 10.000 units per month
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                24/7 technical support
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                Access the Production dashboard
              </p>
              <p className="flex items-center gap-3 text-white tracking-wide text-base">
                initial setup guide
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-black-secondary rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center h-72 px-5 gap-4 max-w-[800px] w-full"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h1 className="text-white font-bold tracking-wider text-xl md:text-2xl">
            Professional
          </h1>
          <p className="text-sm tracking-wide text-gray-300 md:w-3/4 md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo
            esse nihil aspernatur.
          </p>
          <a
            href=""
            className="bg-white text-black-secondary rounded-3xl px-10 py-3 font-semibold mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlantComponents;
