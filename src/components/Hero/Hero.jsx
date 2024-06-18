import React from "react";
import watch1 from "../../assets/watch/blue-watch.png";
import watch2 from "../../assets/watch/yellow-watch.png";
import watch3 from "../../assets/watch/orange-watch.png";

const ImageList = [
  {
    id: 1,
    img: watch1,
    price: "12.99",
    tag: "New",
    title: "Next Gen Blue Watch",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best & Smart Yellow Watch",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra Smart Watch 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(watch1);
  const [title, setTitle] = React.useState("Best & Smart Digital Products");
  const [description, setDescription] = React.useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-6 pt-12  lg:pr-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-4xl lg:text-6xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded"
                >
                  Order Now
                </button>
              </div>
              <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white text-black dark:bg-black dark:text-slate-50 rounded-3xl duration-200">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-1"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={item.img}
                      alt="biryani img"
                      className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    />
                    <div className="flex flex-col items-center justify-center lg:items-start">
                      <p className=" lg:text-lg font-bold">${item.price}</p>
                      <p className="text-sm ">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
