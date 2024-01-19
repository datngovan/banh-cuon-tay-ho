import Image from "next/image"; 
import NavigationBarV2 from "./navigation-bar-v2";
function Cover(){
    return <div className="static">
        <NavigationBarV2 className="z-[1]"/>
        <div className="min-h-svh md:h-lvh min-h-svh mb-[-20] md:min-h-dvh md:bg-center bg-no-repeat bg-[url('/../image/banner.png')] md:bg-[length:100vw_100vh] bg-[length:100vw_80vh]">
        </div>
    </div>
}
export default Cover;