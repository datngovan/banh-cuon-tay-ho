import Cover from "@/components/layouts/cover";
import History from "@/components/layouts/history";
import Menu from "@/components/menu";
import {getFeaturedPosts} from "@/lib/utils"
import { Fragment } from "react";
export default function Home(props) {
  return (
    <Fragment>
      <Cover/>
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
