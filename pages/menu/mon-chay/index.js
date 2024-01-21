import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
import {getAllVegePosts} from "@/lib/utils"
import Link from "next/link";
import Head from "next/head";
export default function VegetarianMenuPage(props){
    return<>
    <Head>
        <title>Thực Đơn Chay | Bánh Cuốn Tây Hồ</title>
       <link
          rel="canonical"
          href="restcipe.io.vn/menu/mon-chay"
          key="canonical"
        />
      </Head>
      <div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div>
            <div className="grid grid-cols-3 items-center justify-around md:mt-10 md:p-10 m-2 p-2">
                <TabButtons name="TẤT CẢ" id="all" value="TẤT CẢ" link="/menu">TẤT CẢ</TabButtons>  
                <TabButtons name="BÁNH MẶN" id="nonVegetarian" link="/menu/mon-man" value="BÁNH MẶN">BÁNH MẶN</TabButtons>
                <TabButtons name="BÁNH CHAY" id="Vegetarian" link="/menu/mon-chay" actived="true" value="BÁNH CHAY">BÁNH CHAY</TabButtons>
            </div>
    </div>
    <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16">
    {props.items.map(item=>
        (<li key={item.slug}><Link href={{pathname: "/menu/[id]", query:{id: item.slug}}}><ItemGrid item={item}/></Link></li>)
    )}
    </ul>
    </div>
    </>
}
export function getStaticProps(){
  const data = getAllVegePosts();
  return {
      props:{
          items: data
      }
  }
}