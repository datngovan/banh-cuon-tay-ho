import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
export default function Contacts() {
  return (
    <Fragment>
    <NextSeo
          title="Thông Tin Liên Hệ | Bánh Cuốn Tây Hồ"
          description="Quý khách hàng có thể liên hệ với Bánh Cuốn Tây Hồ qua số điện thoại hotline: 028-3820-0584 hoặc địa chỉ: 127 Đinh Tiên Hoàng, phường Đakao, Quận 1"
          canonical="hhttps://restcipe.io.vn/thong-tin-lien-he/"
          openGraph={{
            url: "https://restcipe.io.vn/thong-tin-lien-he/",
            title: "Bánh Cuốn Tây Hồ | Thông Tin Liên Hệ | 127 Đinh Tiên Hoàng ĐaKao Quận 1",
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
      <Head>
        <title>Trang Liên Hệ | Bánh Cuốn Tây Hồ</title>
        <meta content="Bánh Cuốn Tây Hồ" property="og:image:alt" />
        <link
          rel="canonical"
          href="https://restcipe.io.vn/contacts/"
          key="canonical"
        />
        {/* <!-- Meta Description --> */}
        <meta
          content="Thông tin liên hệ của Bánh Cuốn Tây Hồ Hotline: 028-3820-0584 địa chỉ: 127 Đinh Tiên Hoàng, phường Đakao, Quận 1."
          name="description"
        />
        <meta
          content="Thông tin liên hệ của Bánh Cuốn Tây Hồ Hotline: 028-3820-0584 địa chỉ: 127 Đinh Tiên Hoàng, phường Đakao, Quận 1."
          property="og:description"
        />
        <meta
          content="Thông tin liên hệ của Bánh Cuốn Tây Hồ Hotline: 028-3820-0584 địa chỉ: 127 Đinh Tiên Hoàng, phường Đakao, Quận 1."
          name="twitter:description"
        />
      </Head>
      <div className="bg-white py-10">
        <p className="text-primary-100 font-bold">Liên hệ</p>
        <div className="flex items-center">
          <Image
            alt="Địa chỉ"
            className=""
            width={15}
            height={15}
            quality={70}
            src="/../image/markerpin01.png"
          />

          <p className="px-2">127 Đinh Tiên Hoàng, phường Đakao, Quận 1.</p>
        </div>
        <div className="flex items-center">
          <Image
            alt="Thời gian hoạt động"
            className=""
            width={15}
            height={15}
            quality={70}
            src="/../image/calendar.png"
          />

          <p className="px-2">6:00 am - 8:00pm</p>
        </div>
        <div className="flex items-center">
          <Image
            alt="Số điện thoại"
            className=""
            width={15}
            height={15}
            quality={70}
            src="/../image/phoneIcon.png"
          />

          <p style={{ color: "red" }} className="px-2 font-semibold">
            028-3820-0584
          </p>
        </div>
      </div>
    </Fragment>
  );
}
