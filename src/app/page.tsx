import Banner from "./_resources/components/banner";
import { Separator } from "@components/separator";

const Home = () => {
  return (
    <div className="h-[200vh]">
      <Banner />
      <div>
        <h2>รายการที่คั่นไว้</h2>
        <Separator orientation="horizontal" />
      </div>
    </div>
  );
};

export default Home;
