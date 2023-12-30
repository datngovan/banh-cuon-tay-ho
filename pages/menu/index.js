import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
const Dummy = {
    vegetarian: [
      { id:1,
        title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
      { id:2,
        title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
      { id:3,
        title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
    ],
    "nonvegetarian": [
      { id:4,
        title: "BÁNH ƯỚT (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
      { id:5,
        title: "BÁNH ƯỚT (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
      { id:6,
        title: "BÁNH ƯỚT (KHÔNG NHÂN)",
        englishTitle: "Steam Rice-Paper (No Filling)",
        image: "/../image/rice-cake.png",
        price: "34.000 VNĐ",
      },
    ],
  };
export default function MenuPage(){
    return<><div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div className="flex flex-row items-center justify-around mt-10 p-10">
            <TabButtons name="TẤT CẢ"/>
            <TabButtons name="BÁNH MẶN"/>
            <TabButtons name="BÁNH CHAY"/>
    </div>
    <div className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
    {Dummy.nonvegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    {Dummy.nonvegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    {Dummy.vegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    {Dummy.vegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    </div>
    </>


}