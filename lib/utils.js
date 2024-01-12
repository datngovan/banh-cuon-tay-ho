import fs from "fs"
import path from "path"
import matter from "gray-matter"
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
export function getFilteredPosts(type){
    const allPosts = getAllPosts()
    const data = allPosts.filter(post=>post.type === type)
    return data;
}
export function getDetailPosts(slug){
    const allPosts = getAllPosts();
    return allPosts.filter(post=>post.slug === slug);
}