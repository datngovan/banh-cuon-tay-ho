import Image from "next/image";
import { getAllPosts, getDetailPosts } from "@/lib/utils";
import fs from "fs"
import path from "path"
import { Fragment } from "react";
export default function MenuItemDetails(props) {
  const {title, englishTitle, image, price, content} = props.items[0];
  return <Fragment>
    <h1 className="flex justify-center text-3xl font-bold text-primary-50">CHI TIẾT MÓN ĂN</h1>
    <div className="flex justify-around pb-10">
      <div className="basis-1/3">
        <Image className="rounded-lg" src={image} width={500} height={500}/>
      </div>
      <div className="basis-1/2">
      <h2 className="text-2xl font-bold text-primary-90">{title}</h2>
      <h2 className="text-lg font-thin text-neutral-60">{englishTitle}</h2>
      <p className="text-lg font-regular">{content}</p>
      </div>
    </div>
  </Fragment>;
}
export async function getStaticProps(context) {
  const {params} = context;
  const id = params.id;
  const data = getDetailPosts(id);
  return {
    props: {
      items: data,
    },
  };
}
export async function getStaticPaths(){
  const PostsDirectory = path.join(process.cwd(), "contents/menu-items");
  const fileNames = fs.readdirSync(PostsDirectory)
  let data = fileNames.map(fileName=>{return {params:{id: fileName.replace('.md','')}}})
  return {
    paths: data, fallback: false
  }
}
