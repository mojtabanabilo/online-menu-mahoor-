import styles from "./hookah.module.scss";

// image
import hookahPic from "../../assets/images/pic-hookah.png";

// data
const hookahData = [
  {
    name: "آلبالو نعنا",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 1,
  },
  {
    name: "آدامس دارچین",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 2,
  },
  {
    name: "پرتقال خامه",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 3,
  },
  {
    name: "شیر قهوه",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 4,
  },
  {
    name: "شیر نارگیل",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 5,
  },
  {
    name: "شیر انبه",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 6,
  },
  {
    name: "طالبی",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 7,
  },
  {
    name: "لیمو نعناع",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 8,
  },
  {
    name: "لیمو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 9,
  },
  {
    name: "پرتقال نعنا",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 10,
  },
  {
    name: "پرتقال",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 11,
  },
  {
    name: "هلو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 12,
  },
  {
    name: "هلو نعنا",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 13,
  },
  {
    name: "هندوانه",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 14,
  },
  {
    name: "آلبالو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 15,
  },
  {
    name: "زعفران",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 16,
  },
  {
    name: "دو سیب",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 17,
  },
  {
    name: "دو سیب آلبالو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 18,
  },
  {
    name: "دو سیب نعناع",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 19,
  },
  {
    name: "دو سیب شلیل",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 20,
  },
  {
    name: "دو سیب لیمو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 21,
  },
  {
    name: "دو سیب زعفران",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 22,
  },
  {
    name: "سیب یخ",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 23,
  },
  {
    name: "آلو یخ",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 24,
  },
  {
    name: "انگور",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 25,
  },
  {
    name: "انگور نعنا",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 26,
  },
  {
    name: "شب های مسکو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 27,
  },
  {
    name: "شاتوت بستنی",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 27,
  },
  {
    name: "لاو",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 27,
  },
  {
    name: "هندونه یخ",
    price: "۵۰۰۰۰",
    description: "تعویض سری: ۴۰۰۰۰ تومان",
    id: 27,
  },
];

const Hookah = () => {
  return (
    <section className={styles.hookah}>
      {hookahData.map((item, index) => (
        <div className={styles.box} key={index}>
          <img src={hookahPic} alt="item-picture" />
          <h3>{item.name}</h3>
          <p>قیمت: {item.price} تومان</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Hookah;
