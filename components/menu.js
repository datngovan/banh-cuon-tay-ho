import ItemGrid from "./item-grid";
import MoreButton from "./more-button";
export default function Menu(props) {
  //console.log(props)
  return (
    <div className="bg-[#ffffff]">
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        THỰC ĐƠN
      </h2>
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        MÓN CHAY
      </h2>
      <div className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
     {/* {menuItems.map(item=><ItemGrid key={item.id} item={item}/>)} */}
      </div>

      <div className="flex flex-row justify-center"><MoreButton/></div>
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        MÓN MẶN
      </h2>
      <div className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
     {/* {menuItems.map(item=><ItemGrid key={item.id} item={item}/>)} */}
      </div>
      <div className="flex flex-row justify-center"><MoreButton/></div>
    </div>
  );
}
