import History from "@/components/layouts/history";
import Menu from "@/components/menu";
import { getFeaturedPosts } from "@/lib/utils";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

export default function Home(props) {
  return (
    <Fragment>
      <NextSeo
        title="Bánh Cuốn Tây Hồ | Đinh Tiên Hoàng ĐaKao Quận 1"
        //description="Bánh Cuốn Tây Hồ với lịch sử hơn 60 năm luôn phục vụ quý khách những món ăn bánh cuốn ngon, với menu đa dạng từ bánh mặn tới chay cùng đồ ăn kèm phong phú."
        canonical="https://restcipe.io.vn/"
        openGraph={{
          url: "https://restcipe.io.vn/",
          title: "Bánh Cuốn Tây Hồ | 127 Đinh Tiên Hoàng ĐaKao Quận 1",
          description:
            "Bánh Cuốn Tây Hồ với lịch sử hơn 60 năm luôn phục vụ quý khách những món ăn bánh cuốn ngon, với menu đa dạng từ bánh mặn tới chay cùng đồ ăn kèm phong phú.",
          images: [
            {
              url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0X66SXycfAYUxmWFHYZMZHZQslp-dwyJBhoiQv5P1br2jaYmUb4ap_5ryXq2HAjj1ymyL1qWNlAf_QOgG1l1pWxx8oYI0aMwsV6TPPQWy0vtOV8-mhwviZZK_Z_xtnFSrkDmN9IYUTCUxz9qJRKO9iSprNuhx1A58gYKFfu0Id8tYmQ/s400-rw-l50/BANNER%20HOME%203.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
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
        // robotsProps={{
        //   nosnippet: false,
        //   notranslate: false,
        //   noarchive: true,
        // }}
      />
      <History />
      <Menu props={props.items} />
    </Fragment>
  );
}
export function getStaticProps() {
  const data = getFeaturedPosts();
  return {
    props: {
      items: data,
    },
  };
}
