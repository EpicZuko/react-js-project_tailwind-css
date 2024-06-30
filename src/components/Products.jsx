import React from "react";
import aboutImg from "../assets/pamma.svg";
import maecImg from "../assets/maec.svg";
import compony from "../assets/icons/compony.svg";
import company2 from "../assets/icons/company2.svg";
import compnay3 from "../assets/icons/company3.svg";
import company4 from "../assets/icons/company4.svg";
import company5 from "../assets/icons/company5.svg";
import company6 from "../assets/icons/company6.svg";
import company7 from "../assets/icons/company7.svg";

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="..." />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company stats  */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
        id="testimonial"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <img src={maecImg} alt="" />
          </div>

          {/* stats  */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div>
                  <div className="flex items-center gap-8 flex-wrap">
                    <img src={compony} alt="..." className="cursor-pointer" />
                    <img src={company2} alt="..." className="cursor-pointer" />
                    <img src={compnay3} alt="..." className="cursor-pointer" />
                    <img src={company4} alt="..." className="cursor-pointer" />
                    <img src={company5} alt="..." className="cursor-pointer" />
                    <img src={company6} alt="..." className="cursor-pointer" />
                    <img src={company7} alt="..." className="cursor-pointer" />
                    <div className="flex items-center gap-8">
                      <a
                        href="/"
                        className="font-bold text-brandPrimary hover:text-neutral-700"
                      >
                        Meet all customers{" "}
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block ml-2"
                        >
                          <path
                            d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                            stroke="#4CAF4F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
