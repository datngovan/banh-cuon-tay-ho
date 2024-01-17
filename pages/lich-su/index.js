import Head from "next/head";
import Image from "next/image"
import { Fragment } from "react";
export default function HistoryInfo(){
  return (
    <Fragment>
    <Head>
    <title>Trang Lịch Sử | Bánh Cuốn Tây Hồ</title>
        <meta name="description" content="Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân) được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể có các loại nhân (thịt, mộc nhĩ…)"/>
        <link
          rel="canonical"
          href="restcipe.io.vn/lich-su"
          key="canonical"
        />
    </Head>
      <div className="flex items-center flex-col px-8">
      <h1 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        {" "}
        LỊCH SỬ BÁNH CUỐN TÂY HỒ
      </h1>
      <div className="md:flex md:items-center md:px-12 my-12">
        <div className="flex flex-col md:w-1/2 md:px-4">
          <p className="font-bold py-2">
            Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân)
            được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể
            có các loại nhân (thịt, mộc nhĩ …) là món ăn dân dã và truyền thống
            của Việt Nam đã có từ thời Lý, Trần đến nay.
          </p>
          <p className="font-extralight py-2 text-neutral-80">
            Steam Rice-paper Rolls, also known as Spring Rolls, or Steam Flat
            Cake (when there is no filling), is made from rice flour, then
            steamed, thinly coated, and rolled with fillings (meat, manioc,
            fungus, etc). This is a rustic and traditional Vietnamese food,
            existed since the Ly, Tran Dynasty until now.
          </p>
        </div>
        <div className="py-3 md:w-1/2 md:order-last md:px-4">
          <Image
            src="/../image/lichsutiem1.png"
            alt="Lịch sử tiệm 1"
            width={650}
            height={450}
          />
        </div>
      </div>
      <div className="md:flex md:items-center md:px-12">
        <div className="flex flex-col md:w-1/2 md:px-4 ">
          <p className="font-bold py-2">
            NGƯỜI ĐẶT TÊN CHO QUÁN
            <br /> Năm 1962, tại sân đền thờ Cụ Phan Châu Trinh hiệu là Tây Hồ
            (1872-1926) lúc ấy ở đầu chợ Đakao, Quận 1, Bà Trần Thị Cà
            (1919-2006) quê ở Hà Nam đã mở một sạp tráng bánh cuốn không tên
            nhưng rất ngon, rẻ và đông nên nhiều thực khách đã tự đặt tên là
            Bánh Cuốn Tây Hồ để dễ bề xác định vị trí đến ăn.
          </p>
          <p className="font-extralight py-2 text-neutral-80">
            DINERS NAMED RESTAURANT In 1962, at the temple yard of Mr. Phan Châu
            Trinh, also named as Tay Ho (1872-1926), located at Dakao market
            District 1, Mrs. Tran Thi Ca (1919-2006), from Ha Nam province, has
            opened an unnamed but very delicious steam rice-paper rolls stall.
            The stall has been successful and crowded, so many diners have named
            it Tay Ho steam rice-paper rolls so easily locate it.
          </p>
        </div>
        <div className="py-3 md:w-1/2 md:order-first md:px-4">
          <Image
            src="/../image/lichsutiem2.png"
            alt="Lịch sử tiệm 2"
            width={650}
            height={450}
          />
        </div>
      </div>
    </div>
    </Fragment>
  );
}