import { useContext } from "react";
import { ColorCheckbox } from "../../ColorCheckbox";
import cls from "./FilterColor.module.scss";
import { AppContext } from "../../../App";

const FilterColor = () => {
  const { filterValues, filter, setFilter } = useContext(AppContext);

  return (
    <div className={cls.widget}>
      <h3 className={cls.title}>Цвет</h3>
      <div className={cls.inputs}>
        {filterValues.colors.map((color, index) => {
          return (
            <ColorCheckbox
              key={index}
              color={color}
              value={color}
              filter={filter}
              setFilter={setFilter}
            />
          );
        })}
      </div>
    </div>
  );
};

export { FilterColor };
