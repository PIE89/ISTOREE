import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { AppContext } from "../../../App";

const PriceReactSelect = () => {
  const { filter, setFilter } = useContext(AppContext);

  const options = [
    { value: "priceAsc", label: "По цене. От дешевых к дорогим" },
    { value: "priceDesc", label: "По цене. От дорогих к дешевым" },
  ];

  const defaultValueIndex = options.findIndex((item) => {
    return filter.sort === item.value;
  });

  return (
    <Select
      isClearable
      defaultValue={options[defaultValueIndex]}
      options={options}
      onChange={(option) => {
        setFilter((prev) => {
          return {
            ...prev,
            sort: option ? option.value : "",
          };
        });
      }}
      placeholder={"Сортировать по цене..."}
    />
  );
};

export { PriceReactSelect };
