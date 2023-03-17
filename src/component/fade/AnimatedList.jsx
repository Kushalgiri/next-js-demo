import { useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedList = ({ items }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [animationDirection, setAnimationDirection] = useState("right");

  const handleDirection = (index) => {
    setAnimationDirection(index % 2 === 0 ? "right" : "left");
  };

  return (
    <div className="animated-list" ref={ref}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`animated-list__item animated-list__item--${animationDirection}`}
          style={{ transitionDelay: `${index * 0.1}s` }}
          onAnimationStart={() => handleDirection(index)}
        >
          <h2 style={{height:"100px",width:"100%"}}>{item.title}</h2><br></br>
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
