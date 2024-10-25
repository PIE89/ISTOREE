import { useEffect, useState } from "react";
import cls from "./MemoryCheckbox.module.scss";

const MemoryCheckbox = ({ value, filter, setFilter }) => {
  const [status, setStatus] = useState(filter.memory.includes(value));

  useEffect(() => {
    setStatus(filter.memory.includes(value));
  }, [filter]);

  useEffect(() => {
    setFilter((prev) => {
      const newMemory = [...prev.memory];
      if (status) {
        newMemory.push(value);
      } else {
        newMemory.splice(
          newMemory.findIndex((item) => item === value),
          1
        );
      }

      return {
        ...prev,
        memory: [...newMemory],
      };
    });
  }, [status]);

  return (
    <label className={cls.checkbox}>
      <input
        className={cls.checkbox__real}
        type="checkbox"
        value={value}
        checked={status}
        onChange={() => {
          setStatus((prev) => !prev);
        }}
      />
      <span className={cls.checkbox__custom}></span>
      <span className={cls.text}>{value}</span>
    </label>
  );
};

export { MemoryCheckbox };
