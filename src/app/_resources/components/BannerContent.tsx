import Image from "next/image";

const BannerContent: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Image
      src={url}
      alt={`thumbnail-${url}`}
      priority
      width={1200}
      height={800}
      className="lg:h-[22vw] rounded-md xl:rounded-xl ml-2"
    />
    // <div className="relative h-[45vw] sm:h-[30vw] 2xl:h-[20vw] w-full basis-full sm:basis-1/2 2xl:basis-1/3 shrink-0 p-4 pl-2 ml-2">
    //   <Image src={url} alt={`thumbnail-${url}`} priority fill className="rounded-lg object-cover" sizes="(max-width: 1200px) 50vw, 100vw" />
    // </div>
  );
};

export default BannerContent;
