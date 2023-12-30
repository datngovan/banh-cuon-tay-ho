import Image from "next/image";
export default function ItemGrid(props){
  const {slug ,title, image, excerpt, date, price,isVegetarian} = props.item;
  const imagePath = `/../image/${image}`
    return <div className="flex flex-col items-center" id={isVegetarian? "vege": "non"}>
        <Image src={imagePath} alt="img" width={370} height={370} className="rounded-[20px]"/>
        <div className="text-red-700 text-2xl font-bold mt-2">{price} VND</div>
        <div className="text-green-600 text-xl font-semibold mt-2">{title}</div>
        <div className="text-gray-500 mt-2">{title}</div>
      </div>
}