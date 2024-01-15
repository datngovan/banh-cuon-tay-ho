import Image from "next/image";
import MoreButton from "../more-button";
export default function History() {
  return (
    <div className="bg-[#ffffff] min-h-full">
      <h2 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        LỊCH SỬ BÁNH CUỐN TÂY HỒ
      </h2>
      <div className="md:flex">
        <div className="md:rotate-[-15deg] md:w-1/2 md:pl-40">
          <Image
            src="/../image/banhcuon.png"
            width={400}
            height={400}
            alt="banh cuon"
            className="mx-auto md:mx-0"
          ></Image>
        </div>
        <div className="flex flex-col md:w-1/2 md:pr-40">
          <p className="text-base font-medium text-neutral-90">
            Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân)
            được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể
            có các loại nhân (thịt, mộc nhĩ…) là món ăn dân dã và truyền thống
            của Việt Nam đã có từ thời Lý, Trần đến nay.
          </p>
          <br />
          <p className="text-sm font-light text-neutral-70">
            Steam Rice-paper Rolls, also known as Spring Rolls, or Steam Flat
            Cake (when there is no filling), is made from rice flour, then
            steamed, thinly coated, and rolled with fillings (meat, manioc,
            fungus, etc). This is a rustic and traditional Vietnamese food,
            existed since the Ly, Tran Dynasty until now.
          </p>
          <br />
          <h3 className="text-base font-medium text-neutral-90">NGƯỜI ĐẶT TÊN CHO QUÁN</h3>
          <p className="text-base font-medium text-neutral-90">
            Năm 1962, tại sân đến thờ Cụ Phan Châu Trinh hiệu là Tây Hồ
            (1872-1926) lúc ấy đấu chợ Đa Kao, Quận 1, Bà Trần Thị Cà
            (1919-2006) quê ở Hà Nội đã mở một sạp tráng bánh cuốn không tên
            nhưng rất ngon, rẻ và đông nên nhiều thực khách đã tự đặt tên là
            Bánh Cuốn Tây Hồ để để bé xác định vị trí đến ăn.
          </p>
          <br />
          <p className="text-sm font-light text-neutral-70">
            Steam Rice-paper Rolls, also known as Spring Rolls, or Steam Flat
            Cake (whent here is no filling), is made from rice flour, then
            steamed, thinly coated and rolled with fillings (meat, manioc,
            fungus, etc). This is a rustic and traditional Vietnamese food,
            existed since the Ly, Tran Dynasty until now.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-10 pb-20"><MoreButton link="/lich-su"/></div>
    </div>
  );
}
