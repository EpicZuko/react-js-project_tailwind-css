import React from "react";
import members from "../assets/members/membership.svg";
import members2 from "../assets/members/membership2.svg";
import members3 from "../assets/members/membership3.svg";
import compony from "../assets/icons/compony.svg";
import company2 from "../assets/icons/company2.svg";
import compnay3 from "../assets/icons/company3.svg";
import company4 from "../assets/icons/company4.svg";
import company5 from "../assets/icons/company5.svg";
import company6 from "../assets/icons/company6.svg";
import company7 from "../assets/icons/company7.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: members,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: members2,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: members3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-1x2 mx-auto" id="services">
      <div className="text-center my-8">
        <h2 className="text-4x1 text-neutralDGrey font-semibold mb-2">
          Out Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={compony} alt="..." />
          <img src={company2} alt="..." />
          <img src={compnay3} alt="..." />
          <img src={company4} alt="..." />
          <img src={company5} alt="..." />
          <img src={company6} alt="..." />
          <img src={company7} alt="..." />
        </div>
      </div>
      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center ">
        <h2 className="text-4x1 text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      {/* cards  */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((services) => (
          <div
            key={services.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto  rounded-tl-3x1 rounded-br-3x1">
                <img src={services.images} alt="..." className="-ml-5" />
              </div>
              <h4 className="text-2x1 font-bold text-neutralDGrey mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-neutralGrey">{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
