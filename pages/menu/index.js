'use client';
import ItemGrid from "@/components/item-grid";
import TabButtons from "@/components/tab-button"
import {getFeaturedPosts} from "@/lib/utils"
import { useState } from "react";
export default function MenuPage(props){
    const {filter, setFilter} = useState("all");
    return<><div className="pt-20 text-center font-bold text-primary-50 text-2xl">
        THỰC ĐƠN
    </div><div className="flex flex-row items-center justify-around mt-10 p-10">
            <TabButtons name="TẤT CẢ" id="all"/>
            <TabButtons name="BÁNH MẶN" id="nonVegetarian"/>
            <TabButtons name="BÁNH CHAY" id="Vegetarian"/>
    </div>
    <div className="flex flex-row justify-around p-16 flex-wrap lg:gap-3">
    {props.items.NonVegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    {props.items.Vegetarian.map(item=><ItemGrid key={item.id} item={item}/>)}
    </div>
    </>
}
export function getStaticProps(){
  const data = getFeaturedPosts();
  return {
      props:{
          items: data
      }
  }
}