import Image from "next/image";
export default function ItemGrid(props){
    const {title, image, excerpt, date, slug} = props.item;
    const imagePath = `/../image/${image}`
    return <div className="flex flex-col items-center ">
        <Image src={imagePath} alt="img" width={370} height={370} className="rounded-[20px]"/>
        <div className="text-red-700 text-2xl font-bold mt-2">{excerpt}</div>
        <div className="text-green-600 text-xl font-semibold mt-2">{title}</div>
        <div className="text-gray-500 mt-2">{slug}</div>
      </div>
}