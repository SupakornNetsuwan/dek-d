import React from "react";
import { AreaChart, Card, TitleProps } from "@tremor/react";
import { add } from "date-fns";
import { formatThaiDate } from "@/core/lib/utils";
import { CreateBookmarkSchemaType } from "@/core/entities/bookmark.entity";
import { useFormContext } from "react-hook-form";
const now = new Date();

const LineChart = () => {
  const { watch } = useFormContext<CreateBookmarkSchemaType>();

  const flaggedEpisode = watch("flaggedEpisode");

  const fakeBookmarkingData = [
    {
      date: formatThaiDate(add(now, { days: -5 }))
        .slice(0, 2)
        .join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
    {
      date: formatThaiDate(add(now, { days: -4 }))
        .slice(0, 2)
        .join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
    {
      date: formatThaiDate(add(now, { days: -3 }))
        .slice(0, 2)
        .join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
    {
      date: formatThaiDate(add(now, { days: -2 }))
        .slice(0, 2)
        .join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
    {
      date: formatThaiDate(add(now, { days: -1 }))
        .slice(0, 2)
        .join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
    {
      date: formatThaiDate(now).slice(0, 2).join(" "),
      จำนวนที่คั่นที่ถูกสร้าง: Math.floor(Math.random() * 200),
    },
  ];

  return (
    <Card className="mt-8 bg-white ">
      <p className="text-start text-sm text-slate-500">
        สถิติที่คั่นหนังสือ{" "}
        <span className="text-slate-800">
          ตอนที่ {flaggedEpisode.nth} - {flaggedEpisode.name}
        </span>
      </p>
      <AreaChart
        className="mt-4 w-full"
        data={fakeBookmarkingData}
        index="date"
        showAnimation={true}
        categories={["จำนวนที่คั่นที่ถูกสร้าง"]}
        colors={["orange"]}
        showLegend={false}
        curveType="monotone"
      />
    </Card>
  );
};

export default LineChart;
