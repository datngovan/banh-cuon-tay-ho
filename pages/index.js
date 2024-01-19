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
        <link
          rel="canonical"
          href="https://restcipe.io.vn"
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
