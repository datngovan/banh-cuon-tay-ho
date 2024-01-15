import Image from "next/image";
export default function Recruitment(){
    return(<div>
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
          ></Image>
        </div>
      </div>
    </div>
  );  
}