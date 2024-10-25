import { useEffect, useState } from "react";
import cls from "./ColorCheckbox.module.scss";

const ColorCheckbox = ({ color, value, filter, setFilter }) => {
  const [status, setStatus] = useState(filter.colors.includes(value));

  useEffect(() => {
    setStatus(filter.colors.includes(value));
  }, [filter]);

  useEffect(() => {
    setFilter((prev) => {
      const newColors = [...prev.colors];
      if (status) {
        newColors.push(value);
      } else {
        newColors.splice(
          newColors.findIndex((item) => item === value),
          1
        );
      }

      return {
        ...prev,
        colors: [...newColors],
      };
    });
  }, [status]);

  if (color === "gray") {
    color = "#D9D9D9";
  }

  if (color === "spacegray") {
    color = "#757575";
  }

  return (
    <label className={cls.radio}>
      <input
        type="checkbox"
        className={cls.radio__real}
        value={value}
        checked={status}
        onChange={() => {
          setStatus((prev) => !prev);
        }}
      />
      <span
        className={cls.radio__custom}
        style={{ backgroundColor: color }}
      ></span>
    </label>
  );
};

export { ColorCheckbox };
