
import styles from '../../styles/features.module.css'
import Card from '../card/Card';
import service1 from "../../assets/images/service/service1.png";
import service2 from "../../assets/images/service/service2.png";
import service3 from "../../assets/images/service/service3.png";
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
  return (
    <div className="container">
        <div className={styles.featureWrapper}>
        <h2>Our Feature</h2>
        <span>
            Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className={styles.cardWrapper}>
            {cardItem.map((item) => (
            <Card item={item}/>
            ))}
        </div>
        </div>
    </div>
  );
}

export default Features