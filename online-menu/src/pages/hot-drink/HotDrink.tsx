import styles from "./hotDrink.module.scss";

// images
import tea from "../../assets/images/tea.jpg";
import coffee from "../../assets/images/coffee.jpg";

// data
const hotDrinkData = [
  {
    name: "چای",
    price: "رایگان",
    id: 1,
    img: tea,
  },
  {
    name: "قهوه",
    price: "۲۰۰۰۰ تومان",
    id: 2,
    img: coffee,
  },
];

const HotDrink = () => {
  return <section className={styles.hot_drink}>
  {hotDrinkData.map((item, index) => (
    <div className={styles.box} key={index}>
      <img src={item.img} alt="item-picture"/>
      <div>
        <h3>{item.name}</h3>
        <p>قیمت: {item.price}</p>
        <p>هر فنجان</p>
      </div>
    </div>
  ))}
</section>;
};

export default HotDrink;