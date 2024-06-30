import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/members/membership.svg",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/members/membership2.svg",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/members/membership3.svg",
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
          <img src="/src/assets/icons/compony.svg" alt="..." />
          <img src="/src/assets/icons/company2.svg" alt="..." />
          <img src="/src/assets/icons/company3.svg" alt="..." />
          <img src="/src/assets/icons/company4.svg" alt="..." />
          <img src="/src/assets/icons/company5.svg" alt="..." />
          <img src="/src/assets/icons/company6.svg" alt="..." />
          <img src="/src/assets/icons/company7.svg" alt="..." />
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
