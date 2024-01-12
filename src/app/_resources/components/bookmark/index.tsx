"use client";
import React, { useMemo } from "react";
import Bookmark, { BookmarkDto } from "@/core/entities/bookmark.entity";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { cn, formatThaiDate } from "@/core/lib/utils";
import ProgressBar from "./ProgressBar";
import useMenuBarCustomizeAtom from "@/core/hooks/useMenuBarCustomizeAtom";
import EditBookmark from "./EditBookmark";
import DeleteBookmarkCheckIcon from "./DeleteBookmarkCheckIcon";
import { gsap } from "gsap";

const BookMarkCard: React.FC<{ bookmarkDto: BookmarkDto }> = ({
  bookmarkDto,
}) => {
  const { menuBarCustomize, checkIsInDeleteList, toggleDeleteList } =
    useMenuBarCustomizeAtom();
  useGSAP(() => {});

  const bookmark = useMemo(() => new Bookmark(bookmarkDto), [bookmarkDto]);
  const isDeleteMode = menuBarCustomize.mode === "delete-mode";
  const isNormalMode = menuBarCustomize.mode === "normal-mode";
  const isInDeleteList = checkIsInDeleteList(bookmark.id);

  return (
    <div
      onClick={() => isDeleteMode && toggleDeleteList(bookmark.id)}
      className={cn(
        "flex flex-col space-y-1 rounded-lg border bg-gray-50 p-2",
        isDeleteMode && "cursor-pointer",
        isDeleteMode && isInDeleteList && "border-2 border-red-500 bg-red-50",
      )}
    >
      <div className="flex w-full justify-end">
        {isNormalMode && <EditBookmark bookmarkId={bookmark.id} />}
        {isDeleteMode && <DeleteBookmarkCheckIcon bookmarkId={bookmark.id} />}
      </div>
      <div className={cn("flex", isDeleteMode && "animate-pulse")}>
        <div className="basis-1/3">
          <Image
            src={`/${bookmark.book.thumbnail}`}
            alt="bookmark_thumbnail"
            className="pointer-events-none w-full rounded-lg"
            width={150}
            height={200}
          />
        </div>
        <div className="ml-1.5 flex basis-2/3 flex-col  overflow-hidden rounded-md bg-white p-1.5">
          <h4
            title={bookmark.book.name}
            className="truncate text-base font-medium text-orange-500"
          >
            {bookmark.book.name}
          </h4>

          <p className="text-xs leading-tight text-slate-500">
            {bookmark.book.author}
          </p>
          <div className="mt-auto flex flex-col items-start">
            <div className="flex w-full justify-start">
              <p className="whitespace-nowrap rounded-sm bg-green-50 px-1 py-0.5 text-[10px] text-green-500">
                ตอนที่ {bookmark.flaggedEpisode.nth}
              </p>
              <p
                title={bookmark.flaggedEpisode.name}
                className="max-w-full truncate rounded-sm bg-slate-50 px-1 py-0.5 text-[10px] text-slate-500"
              >
                {bookmark.flaggedEpisode.name}
              </p>
            </div>
            <ProgressBar.Wrapper className="my-2">
              <ProgressBar.Solid
                data={[...new Array(bookmark.flaggedEpisode.nth).keys()]}
              />
              <ProgressBar.Empty
                data={[...new Array(bookmark.getUnReadAmount).keys()]}
              />
            </ProgressBar.Wrapper>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-[10px] text-orange-500">
              อ่านไป {bookmark.getProgress}%
            </p>
            <p className="text-[10px] text-slate-500">
              คั่นล่าสุด {formatThaiDate(bookmark.updatedAt).join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkCard;
