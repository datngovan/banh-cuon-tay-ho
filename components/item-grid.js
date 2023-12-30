import Image from "next/image";
export default function ItemGrid(props){
    const {id,title,englishTitle, image,price} = props.item;
    return <div className="flex flex-col items-center ">
        <Image src={image} alt="img" width={370} height={370} className="rounded-[20px]"/>
        <div className="text-red-700 text-2xl font-bold mt-2">{price}</div>
        <div className="text-green-600 text-xl font-semibold mt-2">{title}</div>
        <div className="text-gray-500 mt-2">{englishTitle}</div>
      </div>
}