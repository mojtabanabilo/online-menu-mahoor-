import styles from "./coldDrink.module.scss";

// images
import ab from "../../assets/images/water.jpg";
import doogh from "../../assets/images/doogh.jpg";
import enrgyZa from "../../assets/images/enrgyza.jpg";
import limoonad from "../../assets/images/limoonad.jpg";
import nooshabe from "../../assets/images/nooshabe.png";

// data
const coldDrinkData = [
  {
    name: "آب",
    price: "۵۰۰۰",
    img: ab,
    id: 1
  },
  {
    name: "دوغ",
    price: "۲۰۰۰۰",
    img: doogh,
    id: 2
  },
  {
    name: "انرژی زا",
    price: "۴۰۰۰۰",
    img: enrgyZa,
    id: 3
  },
  {
    name: "لیموناد",
    price: "۲۰۰۰۰",
    img: limoonad,
    id: 4
  },
  {
    name: "نوشابه",
    price: "۲۰۰۰۰",
    img: nooshabe,
    id: 5
  },
];

const ColdDrink = () => {
  return (
    <section className={styles.cold_drink}>
      {coldDrinkData.map((item, index) => (
        <div className={styles.box} key={index}>
          <img src={item.img} alt="item-picture" />
          <div>
            <h3>{item.name}</h3>
            <p>قیمت: {item.price} تومان</p>
            <p>هر عدد</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ColdDrink;
