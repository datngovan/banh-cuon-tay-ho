import Cover from "@/components/layouts/cover";
import History from "@/components/layouts/history";
import Menu from "@/components/menu";
import {getFeaturedPosts} from "@/lib/utils"
import Head from "next/head";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Bánh Cuốn Tây Hồ</title>
        <meta name="description" content="Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân) được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể có các loại nhân (thịt, mộc nhĩ…)"/>
        <link
          rel="canonical"
          href="restcipe.io.vn"
          key="canonical"
        />
      </Head>
      <History/>
      <Menu props={props.items}/>
    </Fragment>
  );
}
export function getStaticProps(){
  const data = getFeaturedPosts();
  return {
      props:{
          items: data
      }
  }
}
