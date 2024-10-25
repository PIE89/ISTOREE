import { useContext } from "react";
import { MemoryCheckbox } from "../../MemoryCheckbox";
import cls from "./FilterMemories.module.scss";
import { AppContext } from "../../../App";

const FilterMemories = () => {
  const { filter, setFilter, filterValues } = useContext(AppContext);

  return (
    <div className={cls.widget}>
      <h3 className={cls.title}>Объем памяти</h3>
      <div className={cls.inputs}>
        {filterValues.memory.map((memory, index) => {
          return (
            <MemoryCheckbox
              key={index}
              value={memory}
              filter={filter}
              setFilter={setFilter}
            />
          );
        })}
      </div>
    </div>
  );
};

export { FilterMemories };
