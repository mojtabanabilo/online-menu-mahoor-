import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./categories.module.scss";

// icons
import coldDrink from "../../assets/icons/icons8-soda-bottle-100.png";
import hotDrink from "../../assets/icons/icons8-coffee-cup-100.png";
import food from "../../assets/icons/icons8-food-100.png";
import hookah from "../../assets/icons/icons8-hookah-100.png";

const Categories = (): JSX.Element => {
  // state
  const [hover, setHover] = useState<any>({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });

  // navigator
  const navigate = useNavigate();

  // function
  const handleHover = (dataType: string, isHovering: boolean) => {
    setHover((prevHover: any) => ({
      ...prevHover,
      [dataType]: isHovering,
    }));
  };

  return (
    <section className={styles.categories}>
      <div
        className={styles.boxs}
        datatype="c1"
        onMouseEnter={() => handleHover("c1", true)}
        onMouseLeave={() => handleHover("c1", false)}
        onClick={() => navigate('/cold-drink')}
      >
        {hover.c1 ? (
          <div className={styles.drop_down}>
            <p>نوشیدنی سرد</p>
          </div>
        ) : (
          <img src={coldDrink} alt="icon" />
        )}
      </div>
      <div
        className={styles.boxs}
        datatype="c2"
        onMouseEnter={() => handleHover("c2", true)}
        onMouseLeave={() => handleHover("c2", false)}
        onClick={() => navigate('/hot-drink')}
      >
        {hover.c2 ? (
          <div className={styles.drop_down}>
            <p>نوشیدنی گرم</p>
          </div>
        ) : (
          <img src={hotDrink} alt="icon" />
        )}
      </div>
      <div
        className={styles.boxs}
        datatype="c3"
        onMouseEnter={() => handleHover("c3", true)}
        onMouseLeave={() => handleHover("c3", false)}
        onClick={() => navigate('/food')}
      >
        {hover.c3 ? (
          <div className={styles.drop_down}>
            <p>غذا</p>
          </div>
        ) : (
          <img src={food} alt="icon" />
        )}
      </div>
      <div
        className={styles.boxs}
        datatype="c4"
        onMouseEnter={() => handleHover("c4", true)}
        onMouseLeave={() => handleHover("c4", false)}
        onClick={() => navigate('/hookah')}
      >
        {hover.c4 ? (
          <div className={styles.drop_down}>
            <p>قلیان</p>
          </div>
        ) : (
          <img src={hookah} alt="icon" />
        )}
      </div>
    </section>
  );
};

export default Categories;
