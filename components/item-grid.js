import bloggerLoader from "@/lib/my-loader";
import Image from "next/image";
import Link from "next/link";
export default function ItemGrid(props) {
  const { slug, title, image, excerpt, date, price, isVegetarian, englishTitle } = props.item;
  return (
    <div className="flex flex-col items-center border-white border-2 bg-white p-2 rounded-lg my-5 mx-1" id={isVegetarian ? "vege" : "non"}>
      <Image loader={bloggerLoader} src={image} alt={title} width={370} height={370} quality={40} className="rounded-[20px]" />
      <div className="text-green-600 text-xl min-h-14 font-semibold mt-2 px-10 uppercase">{title}</div>
      <div className="text-gray-500 mt-2 px-10 min-h-12">{englishTitle}</div>
      <div className="text-red-700 text-2xl font-bold mt-2 px-10 text-primary-40 pb-1">{price} VNĐ</div>
    </div>
  );
}
