import { AppContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import cls from "./FilterPrice.module.scss";
import "./../../../assets/index.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import CurrencyInput from "react-currency-input-field";

const FilterPrice = () => {
  const { filter, setFilter } = useContext(AppContext);

  const [valueRangeSlider, setValueRangeSlider] = useState([
    filter.price.min,
    filter.price.max,
  ]);

  useEffect(() => {
    setValueRangeSlider([filter.price.min, filter.price.max]);
  }, [filter]);

  const inputHandler = (e) => {
    setValueRangeSlider(e);

    setFilter((prev) => {
      return {
        ...prev,
        price: {
          min: e[0],
          max: e[1],
        },
      };
    });
  };

  return (
    <div className={cls.widget}>
      <h3 className={cls.title}>Цена</h3>
      <div className={cls.inputs}>
        <CurrencyInput
          id="priceMin"
          className={cls.input}
          value={filter.price.min}
          name="priceMin"
          placeholder="Введите значение"
          defaultValue={filter.price.min}
          decimalsLimit={0}
          suffix=" ₽"
          onValueChange={(value) => {
            setFilter((prev) => {
              return {
                ...prev,
                price: {
                  ...prev.price,
                  min: value,
                },
              };
            });
          }}
        />
        <span>-</span>
        <CurrencyInput
          id="priceMax"
          className={cls.input}
          value={filter.price.max}
          name="priceMax"
          placeholder="Введите значение"
          defaultValue={filter.price.max}
          decimalsLimit={0}
          suffix=" ₽"
          onValueChange={(value) => {
            setFilter((prev) => {
              return {
                ...prev,
                price: {
                  ...prev.price,
                  max: value,
                },
              };
            });
          }}
        />
      </div>
      <div className="filter__body--range">
        <RangeSlider
          id="range-slider-gradient"
          value={valueRangeSlider}
          onInput={(e) => {
            inputHandler(e);
          }}
          min={0}
          max={200000}
        />
      </div>
    </div>
  );
};

export { FilterPrice };
