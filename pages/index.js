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
        <meta property="og:image" content="https://banh-cuon-tay-ho.vercel.app/opengraph-image.png"/>
        <meta property="og:url" content="restcipe.io.vn" />
        <meta property="og:title" content="Bánh Cuốn tây Hồ" />
        <meta property="og:title" content="website" />
        <meta property="og:description" content="Bánh cuốn hay còn gọi là Bánh Xuân, Bánh Ướt (khi không có nhân) được làm từ bột gạo, hấp, tráng mỏng và cuộn tròn, bên trong có thể có các loại nhân (thịt, mộc nhĩ…)" />
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
