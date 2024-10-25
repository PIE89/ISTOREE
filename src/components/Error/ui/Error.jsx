import cls from "./Error.module.scss";
import { FcDisclaimer } from "react-icons/fc";

const Error = ({ message }) => {
  return (
    <div className={cls.error}>
      <FcDisclaimer size={"10rem"} />
      <div className={cls.error__text}>{message}</div>
    </div>
  );
};

export { Error };
