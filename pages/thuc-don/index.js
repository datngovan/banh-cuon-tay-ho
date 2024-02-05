import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
import {getAllPosts, getPostDetail} from "@/lib/utils"
import { NextSeo } from "next-seo";
import Link from "next/link";
export default function MenuPage(props){
    return<>
    <NextSeo
          title="Bánh Cuốn Tây Hồ | Thực Đơn | Đinh Tiên Hoàng ĐaKao Quận 1"
          description="Thực Đơn Bánh Cuốn Tây Hồ với nhiều sự lựa chọn giữa các món bánh chay, mặn cùng với các món ăn kèm đa đạng và đặc sắc"
          canonical="https://restcipe.io.vn/thuc-don/"
          openGraph={{
            url: "https://restcipe.io.vn/thuc-don/",
            title: "Bánh Cuốn Tây Hồ | Thực Đơn | 127 Đinh Tiên Hoàng ĐaKao Quận 1",
            description: "Bánh Cuốn Tây Hồ, 127 Đinh Tiên Hoàng, ĐaKao, Quận 1, Thành Phố Hồ Chí Minh, VietNam",
            images: [
              {
                url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0X66SXycfAYUxmWFHYZMZHZQslp-dwyJBhoiQv5P1br2jaYmUb4ap_5ryXq2HAjj1ymyL1qWNlAf_QOgG1l1pWxx8oYI0aMwsV6TPPQWy0vtOV8-mhwviZZK_Z_xtnFSrkDmN9IYUTCUxz9qJRKO9iSprNuhx1A58gYKFfu0Id8tYmQ/s400-rw-l50/BANNER%20HOME%203.jpg",
                width: 800,
                height: 600,
                alt: "Banhs C",
                type: "image/jpg",
              },
            ],
            siteName: "Bánh Cuốn Tây Hồ, 127 Đinh Tiên Hoàng, ĐaKao, Quận 1, Thành Phố Hồ Chí Minh, VietNam",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
      <div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div>
            <div className="grid grid-cols-3 items-center justify-around md:mt-10 md:p-10 mt-5 p-5">
                <TabButtons name="TẤT CẢ" id="all" value="TẤT CẢ" link="/thuc-don/" actived="true">TẤT CẢ</TabButtons>
                <TabButtons name="BÁNH MẶN" id="nonVegetarian" link="/thuc-don/mon-man" value="BÁNH MẶN">BÁNH MẶN</TabButtons>
                <TabButtons name="BÁNH CHAY" id="Vegetarian" link="/thuc-don/mon-chay" value="BÁNH CHAY">BÁNH CHAY</TabButtons>
            </div>
    </div>
    <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16">
    {props.items.map(item=>
    (
      <li key={item.slug}>
      <Link href={{
        pathname: "/thuc-don/[id]",
        query: {id: item.slug}
    }}>
      <ItemGrid item={item}/>
    </Link>
    </li>)
    )}
    </ul>
    </div>
    </>
}
export function getStaticProps(){
  const data = getAllPosts();
  return {
      props:{
          items: data
      }
  }
}