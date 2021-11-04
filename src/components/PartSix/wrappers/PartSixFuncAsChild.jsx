import React from "react";
import useLoadPosts from "../../4PartFour/useLoadPosts";


export const PartSixFuncAsChild = ({children}) =>{

    const [data, error , isLoading] = useLoadPosts();
    return !isLoading && children(data)
}