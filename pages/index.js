import BreakLine from "@/components/break-line";
import Cover from "@/components/layouts/cover";
import History from "@/components/layouts/history";
import NavigationBar from "@/components/layouts/navigation-bar";
import Menu from "@/components/menu";
import {getFeaturedPosts} from "@/lib/utils"
import { Fragment } from "react";
const Dummy = {
  vegetarian: [
    { id:1,
      title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
    { id:2,
      title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
    { id:3,
      title: "BÁNH ƯỚT CHAY (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
  ],
  "nonvegetarian": [
    { id:4,
      title: "BÁNH ƯỚT (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
    { id:5,
      title: "BÁNH ƯỚT (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
    { id:6,
      title: "BÁNH ƯỚT (KHÔNG NHÂN)",
      englishTitle: "Steam Rice-Paper (No Filling)",
      image: "/../image/rice-cake.png",
      price: "34.000 VNĐ",
    },
  ],
};
export default function Home() {
  return (
    <Fragment>
      <Cover/>
      <History/>
      <Menu props={Dummy}/>
    </Fragment>
  );
}
export function getStaticPosts(){
  const items = getFeaturedPosts();
  return {
    props:{
        posts: items
    }
}
}
