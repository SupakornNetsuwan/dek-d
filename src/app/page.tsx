"server only";
import { Suspense } from "react";
import PrimaryWrapper from "@/core/layouts/PrimaryWrapper";
import { Separator } from "@components/separator";
import Banner from "./_resources/components/banner";
import MenuBar from "./_resources/components/menu-bar";
import BookmarkSection from "./_resources/components/BookmarkSection";

const Home = () => {
  return (
    <div className="pb-[10dvh]">
      <Banner />
      <PrimaryWrapper className="relative pt-12">
        <div className="absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold sm:text-2xl">
              รายการที่คั่นไว้
            </h1>
            <MenuBar />
          </div>
          <Separator orientation="horizontal" className="my-2" />
          <Suspense fallback={<div>กำลังดาวน์โหลด...</div>}>
            <BookmarkSection />
          </Suspense>
        </div>
      </PrimaryWrapper>
    </div>
  );
};

export default Home;
