import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const FooterComponents = () => {
  const solutions = [
    {
      name: "Small Bussiness",
    },
    {
      name: "Frelancers",
    },
    {
      name: "Customers",
    },
    {
      name: "Taxes",
    },
  ];

  const company = [
    {
      name: "About Us",
    },
    {
      name: "Career",
    },
    {
      name: "Contact",
    },
  ];

  const learn = [
    {
      name: "Blog",
    },
    {
      name: "Ebooks",
    },
    {
      name: "Guides",
    },
    {
      name: "Templates",
    },
  ];

  const follow = [
    {
      icon: FaXTwitter,
    },
    {
      icon: FaLinkedin,
    },
    {
      icon: RiInstagramFill,
    },
  ];
  return (
    <div className="bg-[#0B0F12]">
      <div className="p-5 max-w-7xl m-auto w-full">
        <div className="flex flex-col gap-10 py-10 items-center lg:flex-row justify-start lg:items-start lg:justify-between lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[300px]">
            <h1 className="text-4xl font-bold text-white">
              Rund<span className="text-green-primary">Pay</span>
            </h1>
            <p className=" text-gray-500 tracking-wide font-normal mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id.
            </p>
          </div>
          <div className="flex flex-wrap gap-7 justify-between md:justify-around lg:flex-1 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">Company</h1>
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">
                Industries
              </h1>
              {company.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-xl font-semibold text-white">
                Products
              </h1>
              {learn.map((item) => (
                <div
                  key={item.name}
                  className="text-gray-500 text-base font-normal"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="mb-2 text-xl font-semibold text-white">
              Follow us on
            </h1>
            <div className="flex gap-5">
              {follow.map((item) => (
                <div key={item.icon}>
                  <item.icon className="text-white text-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center text-gray-500 font-semibold gap-2 border-t-[1px] border-gray-500 p-5 md:flex-row md:justify-between">
          <p>2024 RundMost, All rights reserved</p>
          <div className="md:flex gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
