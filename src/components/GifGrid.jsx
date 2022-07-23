import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( props ) => {
    const { category } = props;
    const [images, setImages] = useState([]);

    const getImages = async () => {
      const newImages = await getGifs( category );
      setImages( newImages );
    }

    useEffect(()=>{
      getImages();
    }, [])
    
  return (
    <>
        <h3>{category}</h3>
        <ol>
          {
            images.map( ({id, title, urlImg})=>(
              <li key={id}>{title}</li>
            ))
          }
        </ol>
    </>
  )
};
