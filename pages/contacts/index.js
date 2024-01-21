import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
export default function Contacts(){
    return(
        <Fragment>
        <Head>
        <title>Trang Liên Hệ | Bánh Cuốn Tây Hồ</title>
        <meta content="Bánh Mì Chim Chạy" property="og:image:alt"/>
        <link
          rel="canonical"
          href="restcipe.io.vn/contacts"
          key="canonical"
        />
      </Head>
      <div className="bg-white py-10">
              <p className="text-primary-100 font-bold">Liên hệ</p>
              <div className="flex items-center">
                <Image
                  alt="markerpin01"
                  className=""
                  width={15}
                  height={15}
                  src="/../image/markerpin01.png"
                />
    
                <p className="px-2">127 Đinh Tiên Hoàng, phường Đakao, Quận 1.</p>
              </div>
              <div className="flex items-center">
                <Image
                  alt="calendar"
                  className=""
                  width={15}
                  height={15}
                  src="/../image/calendar.png"
                />
    
                <p className="px-2">6:00 am - 8:00pm</p>
              </div>
              <div className="flex items-center">
                <Image
                  alt="phoneIcon"
                  className=""
                  width={15}
                  height={15}
                  src="/../image/phoneIcon.png"
                />
    
                <p style={{ color: "red" }} className="px-2 font-semibold">
                  028-3820-0584
                </p>
              </div>
            </div>
    </Fragment>
    )
    
}