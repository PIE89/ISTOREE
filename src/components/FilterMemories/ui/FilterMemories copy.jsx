import { useContext, useEffect, useState } from "react";
import { MemoryCheckbox } from "../../MemoryCheckbox";
import cls from "./FilterMemories.module.scss";
import { AppContext } from "../../../App";

const FilterMemories = () => {
  const { setFilter } = useContext(AppContext);

  const [memoryList, setMemoryList] = useState({
    "128 Gb": false,
    "256 Gb": false,
    "512 Gb": false,
    "1 Tb": false,
    "2 Tb": false,
  });

  useEffect(() => {
    let memoryFilter = [];

    for (let key in memoryList) {
      if (memoryList[key]) memoryFilter.push(key);
    }

    setFilter((prev) => {
      return {
        ...prev,
        memory: memoryFilter,
      };
    });
  }, [memoryList]);

  let memoryListJSX = [];
  for (let key in memoryList) {
    memoryListJSX.push(
      <MemoryCheckbox
        key={key}
        memoryList={memoryList}
        setMemoryList={setMemoryList}
        value={key}
      />
    );
  }

  return (
    <div className={cls.widget}>
      <h3 className={cls.title}>Объем памяти</h3>
      <div className={cls.inputs}>{memoryListJSX}</div>
    </div>
  );
};

export { FilterMemories };
