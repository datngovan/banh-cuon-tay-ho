import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
import {getFeaturedPosts} from "@/lib/utils"
export default function NonVegetarianMenuPage(props){
    return<><div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div>
            <div className="flex flex-row items-center justify-around mt-10 p-10">
                <TabButtons name="TẤT CẢ" id="all" value="TẤT CẢ" link="/menu">TẤT CẢ</TabButtons>
                <TabButtons name="BÁNH MẶN" id="nonVegetarian" link="/menu/mon-man" actived="true" value="BÁNH MẶN">BÁNH MẶN</TabButtons>
                <TabButtons name="BÁNH CHAY" id="Vegetarian" link="/menu/mon-chay" value="BÁNH CHAY">BÁNH CHAY</TabButtons>
            </div>
    </div>
    <div>
    <ul className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
    {props.items.NonVegetarian.map(item=>
        (<li key={item.slug}><ItemGrid item={item}/></li>)
    )}
    </ul>
    </div>
    </>
}
export function getStaticProps(){
  const data = getFeaturedPosts();
  return {
      props:{
          items: data
      }
  }
}