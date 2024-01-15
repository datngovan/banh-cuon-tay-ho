import Image from "next/image"; 
import NavigationBarV2 from "./navigation-bar-v2";
function Cover(){
    return <div className="static">
        <NavigationBarV2 className="z-[1]"/>
        <div className=" min-h-dvh bg-center bg-no-repeat bg-[url('/../image/banner.png')] bg-[length:100vw_100vh]">
        </div>
    </div>
}
export default Cover;