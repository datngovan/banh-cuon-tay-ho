import ItemGrid from "./item-grid";
import MoreButton from "./more-button";
export default function Menu(props) {
  const data = props.props;
    return (
    <div className="bg-[#FFEEE1]">
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        THỰC ĐƠN
      </h2>
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        MÓN CHAY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16 flex-wrap lg:gap-3">
     {data.Vegetarian.map(item=><ItemGrid key={item.slug} item={item}/>)}
      </div>

      <div className="flex flex-row justify-center"><MoreButton link="/menu"/></div>
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        MÓN MẶN
      </h2>
      <div className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
      {data.NonVegetarian.map(item=><ItemGrid key={item.slug} item={item}/>)}
      </div>
      <div className="flex flex-row justify-center"><MoreButton link="/menu"/></div>
    </div>
  );
}
