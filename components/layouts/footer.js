import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return (
        <>
          <div
            style={{ backgroundColor: "#C6F6CE" }}
            className="w-full pt-auto h-96 pl-5 md:flex md:items-center md:justify-between md:h-56 md:px-14"
          >
            <Image
              alt="banh cuon logo"
              className="inline my-6"
              width={200}
              height={89}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZZA826URw6KEQ9S2eNB1FOvgECmM-SF50N4dL-xRZ4qLUvvhfmeaud1wBq9t1ddmmpdqnEv9XhyC5BNibAYivuAKXp_ZZeVvVMIqwmbrdBQQt2cDTozMvKd1zqhpi6uIsTOAJoMzg7ln5s0nCmyfdZ6pDDH62l4r8qrRpRR0OMxZ3HQ/s1600/logo.png"
            />
    
            <div className="">
              <p className="text-primary-100 font-bold">Liên hệ</p>
              <div className="flex items-center">
                <Image
                  alt="markerpin01"
                  className=""
                  width={15}
                  height={15}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0Qv4UmQPjUY_xGy72ARvrQJuOAxHVyTOy9wRMe7avR362snphYqgCdfL7j3B4pFweNsii8BZICNfw6AL5c8kljqrirHQW6kkMzzBP_9bnHQ0Gc-ecjI3NblcYKjiqsbbaTlGhNVk3ewNYz5i6ctjreXLfNOLo_0zKzhF484-RsXUnDw/s1600/markerpin01.png"
                />
    
                <p className="px-2">127 Đinh Tiên Hoàng, phường Đakao, Quận 1.</p>
              </div>
              <div className="flex items-center">
                <Image
                  alt="calendar"
                  className=""
                  width={15}
                  height={15}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuBzwpzbJTJz6ifq3t7oXDmSBH8nSEAKn3sD8ywGty0adWWnE-kfCNHLgkOMn7heFRO-_nl253wnkgcFKKxo-tqOTU6rfTvaX45fKRFkJPd5gkk4JXfGIGHHhoZz11tghyMqxVXE1YZK8wAqoz7Op3S2eUKa1Ju8n9v9SDFAfiuBTJbg/s1600/calendar.png"
                />
    
                <p className="px-2">6:00 am - 8:00pm</p>
              </div>
              <div className="flex items-center">
                <Image
                  alt="phoneIcon"
                  className=""
                  width={15}
                  height={15}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt_zFP8waW_Fk01uYBSgjo36aFiBsydIaQOT5NHG2MBhoi0hf1KmlY1f9_nhzsYTcYS3gVWGXSQ_r5aCd43O0oLJavmbxBTNDVUbDyqmHKALyqkktdhH1FY1DGp8YmzED_-GMDlED4QqDMSIyI6kRULejibEGYw6m_CpTnK-1bV9yIsg/s1600/phoneIcon.png"
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
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh15NzeR1ytnfbnhsjLulBGpYG3xumftc54CsGm7Y0xMheJwPvOj36GYFBmSlo6wpj8HW9qyY5iRUBSJfIevhqlwk0xjdEQTFHxBV4dmDsh4GHCWda5Ehu-jdUzQev5z3Qqc4LKmnCypKvo9zSFw_oVU5AewPiQVU7yb6Q0yGMuwHY8vw/s1600/shopeeFood.png"
                />
                </Link>
    
                <Image
                  alt="qrcode"
                  className="ml-10"
                  width={90}
                  height={90}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzDZ87tCsKOFOyHU-xBDhSYY-fLiauHAu7AI5aAdU4nbZQZu55Jcbc0AHbIPhFOIpVegxMZS1Wxa6cs6v0BLQUnpJkj5CI-WXGvE0hLNum8k_pv0KgmX1AJq94jOw8IzwM1olMGW-YUtH3oVuog7U4-ilraecXatD28O7ZM_t4NGxUwQ/s1600/qrcode.png"
                />
              </div>
            </div>
          </div>
        </>
      );
}