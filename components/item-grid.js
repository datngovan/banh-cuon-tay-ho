import Image from "next/image";
export default function ItemGrid(props){
  const {slug ,title, image, excerpt, date, price,isVegetarian,englishTitle } = props.item;
  console.log(props.item)
  const imagePath = `/../image/${image}`
    return <div className="flex flex-col items-center border-white border-2 bg-white p-2 rounded-lg my-5 mx-1" id={isVegetarian? "vege": "non"}>
        <Image src={imagePath} alt="img" width={370} height={370} className="rounded-[20px]"/>
        <div className="text-red-700 text-2xl font-bold mt-2 px-10">{price} VND</div>
        <div className="text-green-600 text-xl font-semibold mt-2 px-10">{title}</div>
        <div className="text-gray-500 mt-2 px-10">{englishTitle}</div>
      </div>
}