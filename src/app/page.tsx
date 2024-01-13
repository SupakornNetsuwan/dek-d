"server only";
import PrimaryWrapper from "@/core/layouts/PrimaryWrapper";
import { Separator } from "@components/separator";
import Banner from "./_resources/components/banner";
import MenuBar from "./_resources/components/menu-bar";
import BookmarkSection from "./_resources/components/BookmarkSection";
import VisualizeSection from "./_resources/components/VisualizeSection";

const Home = () => {
  return (
    <div className="pb-[10dvh]">
      <Banner />
      <PrimaryWrapper className=" relative flex flex-col gap-y-4 pt-12">
        <div className="absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-lg font-semibold sm:text-2xl py-4 sm:py-0">สถิติ</h1>
          </div>
          <Separator orientation="horizontal" className="my-2" />
          <VisualizeSection />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-lg font-semibold sm:text-2xl py-4 sm:py-0">
              รายการที่คั่นไว้
            </h1>
            <MenuBar />
          </div>
          <Separator orientation="horizontal" className="my-2" />
          <BookmarkSection />
        </div>
      </PrimaryWrapper>
    </div>
  );
};

export default Home;
