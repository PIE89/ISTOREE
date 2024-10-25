import cls from "./Empty.module.scss";
import { FcClearFilters } from "react-icons/fc";

const Empty = ({ message }) => {
  return (
    <div className={cls.empty}>
      <FcClearFilters size={"10rem"} />
      <div className={cls.empty__text}>{message}</div>
    </div>
  );
};

export { Empty };
