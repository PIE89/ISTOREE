import cls from "./Btn.module.scss";

const Btn = ({ title, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} className={cls.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export { Btn };
