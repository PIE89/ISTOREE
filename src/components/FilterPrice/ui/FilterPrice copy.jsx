import { useContext, useEffect, useState } from "react";
import cls from "./FilterPrice.module.scss";
import "./../../../assets/index.scss";
import { AppContext } from "../../../App";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import CurrencyInput from "react-currency-input-field";

const FilterPrice = () => {
  const { filterValues, setFilterValues } = useContext(AppContext);

  // const [value, setValue] = useState([filterPrice.min, filterPrice.max]);

  // useEffect(() => {
  //   setFilterValues((prev) => {
  //     return {
  //       ...prev,
  //       price: {
  //         min: value[0],
  //         max: value[1],
  //       },
  //     };
  //   });
  // }, [value]);

  return (
    <div className={cls.widget}>
      <h3 className={cls.title}>Цена</h3>
      <div className={cls.inputs}>
        <CurrencyInput
          id="priceMin"
          className={cls.input}
          value={filterPrice.min}
          name="priceMin"
          placeholder="Введите значение"
          defaultValue={filterPrice.min}
          decimalsLimit={0}
          onValueChange={(value, name, values) => {
            console.log(value, name, values);

            // setFilterValues((prev) => {
            //   return {
            //     ...prev,
            //     price: {
            //       ...prev.price,
            //       min: value,
            //     },
            //   };
            // });
          }}
          suffix=" ₽"
        />
        <span>-</span>
        <CurrencyInput
          id="priceMax"
          className={cls.input}
          value={filterPrice.max}
          name="priceMin"
          placeholder="Введите значение"
          defaultValue={filterPrice.max}
          decimalsLimit={0}
          onValueChange={(value, name, values) => {
            console.log(value, name, values);

            // setFilterValues((prev) => {
            //   return {
            //     ...prev,
            //     price: {
            //       ...prev.price,
            //       max: value,
            //     },
            //   };
            // });
          }}
          suffix=" ₽"
        />
      </div>
      {/* <div className="filter__body--range">
        <RangeSlider
          id="range-slider-gradient"
          value={value}
          onInput={setValue}
          min={0}
          max={200000}
        />
      </div> */}
    </div>
  );
};

export { FilterPrice };
