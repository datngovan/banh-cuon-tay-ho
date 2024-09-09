import ItemGrid from "@/components/menu-item-grid";
import TabButtons from "@/components/tab-button";
import { getAllNonVegePosts } from "@/lib/utils";
import Link from "next/link";
import { NextSeo } from "next-seo";
export default function NonVegetarianMenuPage(props) {
  return (
    <section>
      <NextSeo
        title="Thực Đơn Món Mặn | Bánh Cuốn Tây Hồ"
        description="Thực Đơn các món Mặn đa dạng với các loại bánh cuốn chà bông, bánh cuốn nhân Tôm Thịt Gà Nấm, cùng với đồ ăn kèm đa dạng đặc biệt như chả lụa, chả huế, bánh cam và đăc biệt là tinh chất Cà Cuống"
        canonical="https://restcipe.io.vn/thuc-don/mon-man/"
        openGraph={{
          url: "https://restcipe.io.vn/thuc-don/mon-man/",
          title: "Bánh Cuốn Tây Hồ | Thực Đơn | 127 Đinh Tiên Hoàng ĐaKao Quận 1",
          description: "Bánh Cuốn Tây Hồ, 127 Đinh Tiên Hoàng, ĐaKao, Quận 1, Thành Phố Hồ Chí Minh, VietNam",
          images: [
            {
              url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0X66SXycfAYUxmWFHYZMZHZQslp-dwyJBhoiQv5P1br2jaYmUb4ap_5ryXq2HAjj1ymyL1qWNlAf_QOgG1l1pWxx8oYI0aMwsV6TPPQWy0vtOV8-mhwviZZK_Z_xtnFSrkDmN9IYUTCUxz9qJRKO9iSprNuhx1A58gYKFfu0Id8tYmQ/s400-rw-l50/BANNER%20HOME%203.jpg",
              width: 800,
              height: 600,
              alt: "Bánh Cuốn Tây Hồ, 127 Đinh Tiên Hoàng, ĐaKao, Quận 1, Thành Phố Hồ Chí Minh, VietNam",
              type: "image/jpg",
            },
          ],
          siteName: "Bánh Cuốn Tây Hồ",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <h1 className="pt-20 text-center font-bold text-primary-50 text-4xl">THỰC ĐƠN MẶN</h1>
      <div>
        <div className="grid grid-cols-3 items-center justify-around md:mt-10 md:p-10 mt-5 p-5">
          <TabButtons name="TẤT CẢ" id="all" value="TẤT CẢ" link="/thuc-don/">
            TẤT CẢ
          </TabButtons>
          <TabButtons name="BÁNH MẶN" id="nonVegetarian" link="/thuc-don/mon-man" actived="true" value="BÁNH MẶN">
            BÁNH MẶN
          </TabButtons>
          <TabButtons name="BÁNH CHAY" id="Vegetarian" link="/thuc-don/mon-chay" value="BÁNH CHAY">
            BÁNH CHAY
          </TabButtons>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between text-center p-16">
          {props.items.map((item) => (
            <li key={item.slug}>
              <Link
                href={{
                  pathname: "/thuc-don/[id]",
                  query: { id: item.slug, img: item.images },
                }}
              >
                <ItemGrid item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function getStaticProps() {
  const data = getAllNonVegePosts();
  return {
    props: {
      items: data,
    },
  };
}
