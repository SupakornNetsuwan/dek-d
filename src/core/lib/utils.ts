import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, getYear, getDate, getMonth } from "date-fns";
import { th } from "date-fns/locale";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const timer = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))


export const formatThaiDate = (date: Date, formatStr: string = "d MMM yyyy") => format(
  date,
  formatStr,
  { locale: th },
).split(" ").map((item, index) => {

  if (index == 2) {
    // Is year then convert to Buddhist era
    return parseInt(item) + 543
  }
  return item
});