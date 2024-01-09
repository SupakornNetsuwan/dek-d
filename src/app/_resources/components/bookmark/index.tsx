"use client";
import React, { useMemo } from "react";
import Bookmark, { BookmarkDto } from "@/core/entities/bookmark.entity";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { formatThaiDate } from "@/core/lib/utils";
import ProgressBar from "./ProgressBar";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { gsap } from "gsap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/dropdown-menu";
import CustomDialog from "@/core/components/CustomDialog";
import EditBookmarkProvider from "./edit-bookmark-dialog/providers/EditBookmarkProvider";
import DeleteBookmarkDialogContent from "./delete-bookmark-dialog";
import EditBookMarkForm from "./edit-bookmark-dialog/form";

const BookMarkCard: React.FC<{ bookmarkDto: BookmarkDto }> = ({
  bookmarkDto,
}) => {
  useGSAP(() => {});

  const bookmark = useMemo(() => new Bookmark(bookmarkDto), [bookmarkDto]);

  return (
    <div className="flex flex-col space-y-1 rounded-lg border bg-gray-50 p-2">
      <div className="flex w-full justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-6 rounded-sm sm:size-5 sm:border-none"
            >
              <MoreHorizontal size={14} className="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36 max-w-none">
            <CustomDialog
              title="แก้ไขที่คั่นหนังสือ"
              description="แก้ไขข้อมูลที่คั่นหนังสือเดิมในคลัง"
              render={({ open, close }) => {
                return (
                  <EditBookmarkProvider
                    bookmarkId={bookmark.id}
                    closeDialog={close}
                  >
                    <EditBookMarkForm />
                  </EditBookmarkProvider>
                );
              }}
            >
              {({ open }) => {
                return (
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      open();
                    }}
                    className="group flex cursor-pointer justify-between p-1 sm:p-2"
                  >
                    <Pencil
                      size={14}
                      className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
                    />
                    <span>แก้ไขรายการ</span>
                  </DropdownMenuItem>
                );
              }}
            </CustomDialog>

            <DropdownMenuSeparator />
            <CustomDialog
              title="ลบที่คั่นหนังสือ"
              description="คุณจะไม่สามารถกู้คืนที่คั่นหนังสือได้"
              render={() => (
                <DeleteBookmarkDialogContent bookmarkId={bookmark.id} />
              )}
            >
              {({ open }) => (
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                  className="group flex cursor-pointer justify-between p-1 sm:p-2"
                >
                  <Trash2
                    size={14}
                    className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
                  />
                  <span>ลบรายการ</span>
                </DropdownMenuItem>
              )}
            </CustomDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
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
