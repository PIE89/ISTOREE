import { ClockLoader } from "react-spinners";
import cls from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={cls.loader}>
      <ClockLoader size={150} />
    </div>
  );
};

export { Loader };
