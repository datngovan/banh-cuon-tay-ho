export default function bloggerLoader({ src , width , quality }) {
    const params = [`s${width}`,"rw", `l${quality || 100}`]
    const optimizedSizeLink = src.replace("s1600",params.join('-')) 
    return optimizedSizeLink
  }