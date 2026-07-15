import AllBooks from "./AllBooks";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center">
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Homepage;
