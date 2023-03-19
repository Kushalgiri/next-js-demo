import React from 'react'
import Image from "next/image";

import Style from "../../styles/Card.module.css"

function Card({item, index}) {
  return (
    <div
      data-aos={
        index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"
      }
      className={Style.cardWrap}
    >
      {/* <Image src={item.imageUrl} className={Style.cardIcon} alt="/" /> */}
      <h3>{item.title}</h3>
      {/* <p>{item.body}</p> */}
      <button className="btn btn-danger">Read More</button>
    </div>
  );
}

// index %2 === 0  
// for odd and even 

export default Card