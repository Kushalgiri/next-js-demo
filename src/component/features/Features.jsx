
import styles from '../../styles/features.module.css'
import Card from '../card/Card';
import service1 from "../../assets/images/service/service1.png";
import service2 from "../../assets/images/service/service2.png";
import service3 from "../../assets/images/service/service3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";


function Features() {
  

    const cardItem = [
      {
        id: 1,
        title: "Lorem Ipsum",
        body: "Lorem  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        imageUrl: service1,
      },
      {
        id: 2,
        title: "City Views",
        body: "Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        imageUrl: service2,
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        body: "Lorem Ipsum has been the industry's standard dummy text",
        imageUrl: require("../../assets/images/service/service1.png"),
      },
    ];


 const [showCards, setShowCards] = useState(false);

 useEffect(() => {
   setShowCards(true);
 }, []);

 const cardSpring = useSpring({
   from: { opacity: 0, transform: "translateY(50px)" },
   to: {
     opacity: showCards ? 1 : 0,
     transform: showCards ? "translateY(0)" : "translateY(50px)",
   },
   delay: 500,
 });


  return (


   

    <div className="container">
      <div className={styles.featureWrapper}>
        <h2 data-aos="fade-up">Our Feature</h2>
        <span>
          Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className={styles.cardWrapper}>
          {/* {cardItem.map((item, index) => (
            
              <Card item={item} index={index}/>
          ))} */}

 <div className="banner">
      <animated.div style={cardSpring} className="card">
        <h2>Card 1</h2>
        <p>This is the content for card 1.</p>
      </animated.div>
      <animated.div style={cardSpring} className="card">
        <h2>Card 2</h2>
        <p>This is the content for card 2.</p>
      </animated.div>
      <animated.div style={cardSpring} className="card">
        <h2>Card 3</h2>
        <p>This is the content for card 3.</p>
      </animated.div>
    </div>


        </div>
      </div>
    </div>
  );
}


//  data-aos={index=== 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}

export default Features