import React from "react";
import Image from "./Image.js";
import Video from "./Video.js";
import Arama from "./Arama.js"


const Nasa = (props) => {
    const {arama,aramaHandler ,veri} = props;
    return (
      <div>
        <Arama arama={arama} aramaHandler={aramaHandler} />
        {
        veri.media_type === "image"  
        ? (  // ilk önce bu veri mi diye bakacak. Eğer veri ise bu veri.media_type ' mı diye bakacak.
          <Image url={veri.hdurl} />
        ) : (
          <Video url={veri.url} />
        )}  
  
        <h2>{veri.title}</h2>
        <div>
          <p>{veri.copyright ? `copyright: ${veri.copyright}` : ''}</p>
          <p>{veri.date}</p>
        </div>
        <p>{veri.explanation}</p>
      </div>
    );
  };
  

export default Nasa;