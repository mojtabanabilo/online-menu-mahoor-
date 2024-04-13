import styles from "./foods.module.scss";

// images
import nimroo from "../../assets/images/nimroo.jpeg";
import sosisTokhmMorgh from "../../assets/images/sosistokhmmorgh.jpeg";
import omlet from "../../assets/images/omlet.jpg";

// data
const foodsData = [
  {
    name: "نیمرو",
    cost_1person: "۴۰۰۰۰",
    cost_2person: "۵۵۰۰۰",
    img: nimroo,
    id: 1,
  },
  {
    name: "املت",
    cost_1person: "۵۰۰۰۰",
    cost_2person: "۸۰۰۰۰",
    img: omlet,
    id: 2,
  },
  {
    name: "سوسیس تخم مرغ",
    cost_1person: "۶۰۰۰۰",
    cost_2person: "۹۰۰۰۰",
    img: sosisTokhmMorgh,
    id: 3,
  },
];

const Foods = (): JSX.Element => {
  return (
    <section className={styles.foods}>
      {foodsData.map((item, index) => (
        <div className={styles.box} key={index}>
          <img src={item.img} alt="item-picture"/>
          <div>
            <h3>{item.name}</h3>
            <p>قیمت یک نفره: {item.cost_1person} تومان</p>
            <p>قیمت دو نفره: {item.cost_2person} تومان</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Foods;
