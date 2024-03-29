import fs from "fs"
import path from "path"
import matter from "gray-matter"
import axios from 'axios';
// PostDirectory join process.cwd()- current working directory with posts => @/posts
const PostsDirectory = path.join(process.cwd(), "contents/menu-items");
export function getPostData(fileName){
    const postSlug = fileName.replace(/\.md$/,""); //replace the file extension
    const filePath = path.join(PostsDirectory,`${fileName}`)
    const fileContents = fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContents);
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}
export function getAllPosts(){
    const postFiles = fs.readdirSync(PostsDirectory);
    const allPosts = postFiles.map(postFile=>{
        return getPostData(postFile);
    })
    const sortedPosts = allPosts.sort((postA, postB) => postA.date>postB.date ? -1:1)
    return sortedPosts
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredVegetarianPosts = allPosts.filter(post=>post.isFeatured && post.isVegetarian);
    const featuredNonVegetarianPosts = allPosts.filter(post=>post.isFeatured && !post.isVegetarian);
    const featuredPosts = {
        Vegetarian: featuredVegetarianPosts,
        NonVegetarian: featuredNonVegetarianPosts}
    return featuredPosts;
}
export function getAllVegePosts(){
    const allPosts = getAllPosts()
    const data = allPosts.filter(post=>post.isVegetarian === true)
    return data;
}

export function getAllNonVegePosts(){
    const allPosts = getAllPosts()
    const data = allPosts.filter(post=>post.isVegetarian === false)
    return data;
}
export async function getAllPostsFetch() {
    // const response = await fetch("PostsDirectory");
    // const data = await response.json();
    // console.log(data);
    // fetch('https://github.com/erasabi/trekthroughs/blob/master/pen_testing/RickdiculouslyEasy.md')
    // .then(response => response.blob())
    // .then(result => console.log(result));
  }

export function getDetailPosts(slug){
    const allPosts = getAllPosts();
    return allPosts.find(post=>post.slug === slug);
}