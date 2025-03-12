/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext(null);

export const BlogContextProvider = (props)=>{

    const [blogsData,setBlogsData] = useState(()=>{
        const storedBlogs = localStorage.getItem('blogsData')
        return storedBlogs ? JSON.parse(storedBlogs) : [];
    });

    useEffect(()=>{
        localStorage.setItem('blogsData',JSON.stringify(blogsData))
    },[blogsData])

return (
    <BlogContext.Provider value={{blogsData, setBlogsData}}>
        {props.children}
    </BlogContext.Provider>
)

}