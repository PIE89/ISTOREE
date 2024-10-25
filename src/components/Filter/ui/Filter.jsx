import { AppContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { FilterPrice } from "../../FilterPrice";
import { FilterMemories } from "../../FilterMemories";
import { FilterColor } from "../../FilterColor";
import cls from "./Filter.module.scss";
import { ResetBtn } from "../../ResetBtn";

const Filter = () => {
  const { filterValues, filter } = useContext(AppContext);

  const [resetButton, setResetButton] = useState(false);

  useEffect(() => {
    if (
      filter.colors.length ||
      filter.memory.length ||
      (filter.price.min && filter.price.min !== filterValues.price.min) ||
      (filter.price.max && filter.price.max !== filterValues.price.max)
    ) {
      setResetButton(true);
    } else {
      setResetButton(false);
    }
  }, [filter]);

  return (
    <div className={cls.widget}>
      <h2 className={cls.title}>Фильтр</h2>

      {filter.price.max && <FilterPrice />}

      {filterValues && <FilterMemories />}

      {filterValues && <FilterColor />}

      {resetButton && <ResetBtn />}
    </div>
  );
};

export { Filter };
