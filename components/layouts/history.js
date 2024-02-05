import Image from "next/image";
import MoreButton from "../more-button";
export default function History() {
  return (
    <div className="bg-[#ffffff] min-h-full">
      <h1 className="grow text-center font-semibold text-3xl py-10 text-primary-60">
        BÁNH CUỐN TÂY HỒ
      </h1>
      <div className="md:flex">
        <div id="main" className="flex flex-col md:w-1/2 md:pr-40">
        {/* <h2 className="text-base font-medium text-neutral-90">NGƯỜI ĐẶT TÊN CHO QUÁN</h2> */}
          <p className="text-xl font-medium text-neutral-90">
          Bánh Cuốn Tây Hồ với lịch sử hơn 60 năm luôn phục vụ quý khách những món ăn bánh cuốn ngon, với menu đa dạng từ bánh mặn như: Bánh Cuốn Tây Hồ Chà Bông Tôm, Bánh Cuốn Tây Hồ Trứng Vàng, Bánh Cuốn Tây Hồ Nhân Tôm Thịt Nấm tới chay cùng đồ ăn kèm phong phú như tinh chất Cà Cuống, nem Huế, Chả Lụa, Chả Chay.
          </p>
          <br/>
          <p className="text-base font-medium text-neutral-90">
            Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân)
            được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể
            có các loại nhân (thịt, mộc nhĩ…) là món ăn dân dã và truyền thống
            của Việt Nam đã có từ thời Lý, Trần đến nay.
          </p>
          <br />
        </div>
        <div className="md:rotate-[15deg] md:w-1/2 md:pl-40">
          <Image
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9DgjKI9fxDFi4W8SVQfkLci8g-ANJNN-JLQ_SZwVM-RiRverUVzFO7DeevLT8gbBVkGtrvA9cdr0Q7tu9-zN7PfdOPrQe79U7plAIecDqiCDhglaaYRu4gAPSod_dLSY2tslHc9c8muDLUCT3kRQFOxqNKvevfhsXvN5CaeZZL5Q0IA/s1600/Anh%20vẽ%20Lịch%20sử%202.jpg"
            width={400}
            height={400}
            quality={30}
            alt="Ảnh Bánh Cuốn Tây Hồ"
            className="mx-auto md:mx-0"
            priority = {true}
          ></Image>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-10 pb-20"><MoreButton link="/lich-su-banh-cuon-tay-ho/"/></div>
    </div>
  );
}
