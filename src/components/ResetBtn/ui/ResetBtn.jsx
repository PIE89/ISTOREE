import { useContext } from "react";
import cls from "./ResetBtn.module.scss";
import { AppContext } from "../../../App";

const ResetBtn = () => {
  const { filterValues, setFilter } = useContext(AppContext);

  let handleClick = () => {
    setFilter((prev) => {
      return {
        ...prev,
        price: {
          min: filterValues.price.min,
          max: filterValues.price.max,
        },
        memory: [],
        colors: [],
      };
    });
  };

  return (
    <button className={cls.btn} onClick={handleClick}>
      Сбросить значения фильтра
    </button>
  );
};

export { ResetBtn };
