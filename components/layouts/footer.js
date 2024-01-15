import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return (
        <>
          <div
            style={{ backgroundColor: "#C6F6CE" }}
            className="w-full mt-16 h-96 pl-5 md:flex md:items-center md:justify-between md:h-56 md:px-14"
          >
            <Image
              alt="banh cuon logo"
              className="inline my-6"
              width={200}
              height={89}
              src="/../image/logo.png"
            />
    
            <div className="">
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
            <div className="my-5 md:my-0 md:mt-12">
              <p style={{ color: "#a11b1b" }} className="font-bold">
                MUA NGAY TẠI
              </p>
    
              <div className="flex my-2">
                <Link href="https://shopeefood.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang">
                <Image
                  alt="shopeeFood"
                  className=""
                  width={95}
                  height={95}
                  src="/../image/shopeeFood.png"
                />
                </Link>
    
                <Image
                  alt="qrcode"
                  className="ml-10"
                  width={90}
                  height={90}
                  src="/../image/qrcode.png"
                />
              </div>
            </div>
          </div>
        </>
      );
}