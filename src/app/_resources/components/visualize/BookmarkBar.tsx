import { useRef } from "react";
import Bookmark from "@/core/entities/bookmark.entity";
import { cn } from "@/core/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import React from "react";

const BookmarkBar: React.FC<{ bookmark: Bookmark }> = ({ bookmark }) => {
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      barRef.current,
      {
        filter: "grayscale(1)",
        opacity: 0.5,
      },
      {
        height: `${bookmark.getProgress}%`,
        stagger: 0.1,
        delay: gsap.utils.random(0, 1),
        filter: "grayscale(0)",
        opacity: 1,
        ease: "power2",
      },
    );
  }, [bookmark.getProgress]);

  return (
    <div className="group relative z-10 flex w-full items-end">
      <div
        ref={barRef}
        className={cn(
          "bar relative z-20 mx-auto w-full max-w-[4em] rounded-md bg-gradient-to-t from-orange-100/50 via-amber-500 to-orange-500 duration-100 group-hover:scale-110 group-hover:shadow-realistic-1 ",
        )}
      />
      <div className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-sm border bg-white p-1 opacity-0 group-hover:opacity-100">
        <p className="min-w-0 whitespace-nowrap text-sm">
          {bookmark.book.name}
        </p>
        <p className="text-center font-medium">{`${bookmark.getProgress}%`}</p>
      </div>
      <div className="absolute inset-0 top-2 z-0 border-b-2 bg-gradient-to-tr from-slate-500/30 to-slate-300/10 opacity-0 backdrop-blur-[2px] duration-150 group-hover:opacity-100" />
    </div>
  );
};

export default BookmarkBar;
