import ItemGrid from "./menu-item-grid";
import MoreButton from "./more-button";
export default function Menu(props) {
  const data = props.props;
    return (
    <div className="bg-[#FFEEE1]">
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        THỰC ĐƠN BÁNH CUỐN TÂY HỒ
      </h2>
      <h2 className="grow text-center font-semibold text-3xl pt-5 pb-2 text-primary-60">
        MÓN CHAY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16 pt-1">
     {data.Vegetarian.map(item=><ItemGrid key={item.slug} item={item}/>)}
      </div>

      <div className="flex flex-row justify-center"><MoreButton link="/thuc-don/mon-chay"/></div>
      <h2 className="grow text-center font-semibold text-3xl pt-5 pb-2 text-primary-60">
        MÓN MẶN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16 pt-1">
      {data.NonVegetarian.map(item=><ItemGrid key={item.slug} item={item}/>)}
      </div>
      <div className="flex flex-row justify-center pb-5"><MoreButton link="/thuc-don/mon-man"/></div>
    </div>
  );
}
