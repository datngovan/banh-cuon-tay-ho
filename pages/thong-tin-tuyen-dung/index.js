import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
export const metadata = {
  title: "Bánh Cuốn Tây Hồ"
}
export default function Recruitment(){
    return(<div className="pb-10">
     <NextSeo
          title="Cơ Hội Việc Làm | Bánh Cuốn Tây Hồ"
          description="Cơ hội việc làm bánh cuốn Tây Hồ lương khởi điểm hấp dẫn 22.000 VNĐ/h cùng nhiều đãi ngộ khác. Liên hệ để biết thêm chi tiết"
          canonical="hhttps://restcipe.io.vn/thong-tin-tuyen-dung/"
          openGraph={{
            url: "https://restcipe.io.vn/thong-tin-tuyen-dung/",
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
      <div className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        Tuyển Dụng
      </div>
      <div className="mx-10">
        <div className="flex">
          <div className="text-primary-60 font-bold">Mức lương khởi điểm:</div>
          <p>22.000đ/h</p>
        </div>
        <div className="my-6">
          <p className="text-primary-60 font-bold">Mô tả công việc:</p>
          <p>
            - Cầm menu order khách <br />- Bưng bê đồ ăn, lau dọn bàn, đổ bột,
            lên giá <br /> - Làm sáng thứ 7, chủ nhật (thời gian: 6h-13h)
          </p>
        </div>
        <div className="my-6">
          <p className="text-primary-60 font-bold">Yêu cầu:</p>
          <p>
            - Nữ, nhanh nhẹn, ghi nhớ order của khách, chủ động trong công việc.{" "}
            <br />- Không cần kinh nghiệm, được đào tạo, nhận việc ngay. Môi
            trường làm việc năng động, thân thiện, đoàn kết.
          </p>
        </div>
        <div className="my-6">
          <p className="text-primary-60 font-bold">Quyền lợi:</p>
          <p>
            - Làm việc trong dịp tết sẽ được thưởng tết
            <br />- Làm tốt, lâu dài trên 5 tháng sẽ tăng lương giá <br /> - Bao
            ăn trưa.
          </p>
        </div>
        <p>
          Xin nhắn tin zalo nội dung họ tên, năm sinh, công việc cũ, số điện
          thoại. Xin cám ơn.
        </p>
        <div className="mt-10">
          <p className="my-2 font-extrabold">Mã QR Zalo</p>
          <Image
            src="/../image/maqr.png"
            width={180}
            height={180}
            alt="banh cuon"
            className=""
            quality={70}
          ></Image>
        </div>
      </div>
    </div>
  );  
}