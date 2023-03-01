import React from 'react'
import Image from "next/image";

import Style from "../../styles/Card.module.css"

function Card({item}) {
  return (
        <div className={Style.cardWrap}>
          <Image src={item.imageUrl} className={Style.cardIcon} alt="/" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <button className="btn btn-danger">Read More</button>
        </div>
  );
}

export default Card