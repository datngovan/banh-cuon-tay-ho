import Cover from "@/components/layouts/cover";
import History from "@/components/layouts/history";
import NavigationBar from "@/components/layouts/navigation-bar";
import Menu from "@/components/menu";
import { Fragment } from "react";
import { getFeaturedPosts} from "@/lib/utils";
export default function Home(props) {
  return (
    <Fragment>
      <Cover/>
      <History/>
      {/* <Menu props={props.posts}/> */}
    </Fragment>
  );
}
// export function getStaticProps(){
//   const featuredPosts = getFeaturedPosts();
//   return {
//       props:{
//           posts: featuredPosts
//       }
//   }
// }