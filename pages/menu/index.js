import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
import {getFeaturedPosts} from "@/lib/utils"
import Link from "next/link";
export default function MenuPage(props){
    return<><div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div>
            <div className="grid md:grid-cols-3 items-center justify-around mt-10 p-10">
                <TabButtons name="TẤT CẢ" id="all" value="TẤT CẢ" link="/menu" actived="true">TẤT CẢ</TabButtons>
                <TabButtons name="BÁNH MẶN" id="nonVegetarian" link="/menu/mon-man" value="BÁNH MẶN">BÁNH MẶN</TabButtons>
                <TabButtons name="BÁNH CHAY" id="Vegetarian" link="/menu/mon-chay" value="BÁNH CHAY">BÁNH CHAY</TabButtons>
            </div>
    </div>
    <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16">
    {props.items.NonVegetarian.map(item=>
    (<li key={item.slug}><Link href={{pathname: "/menu/[id]", query:{id: item.slug}}}><ItemGrid item={item}/></Link></li>)
    )}
    {props.items.Vegetarian.map(item=>
        (<li key={item.slug}><Link href={{pathname: "/menu/[id]", query:{id: item.slug}}}><ItemGrid item={item}/></Link></li>)
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