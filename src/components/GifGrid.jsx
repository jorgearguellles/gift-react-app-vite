import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( props ) => {
    const { category } = props;

    useEffect(()=>{
      getGifs(category);
    }, [])
    
  return (
    <>
        <h3>{category}</h3>
    </>
  )
};
