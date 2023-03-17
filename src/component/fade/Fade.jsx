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
          {item.title}
        </div>
      ))}
    </div>
  );
};

const MyPage = () => {
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
  ];

  return (
    <div>
      <h1>Animated List Example</h1>
      <AnimatedList items={items} />
    </div>
  );
};

export default MyPage;
