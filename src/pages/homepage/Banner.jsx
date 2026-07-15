import bannerImage from "../../assets/hero_img.jpg";
const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-base-200 p-5 rounded-3xl">
      <div className="flex flex-col lg:flex-row-reverse rounded-3xl gap-5 lg:gap-20 items-center ">
        <img src={bannerImage} className="rounded-3xl" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-5xl font-semibold text-center">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success w-30 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
