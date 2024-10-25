import cls from "./Input.module.scss";

const Input = ({ type, value, setFilter }) => {
  return (
    <input
      type="text"
      className={cls.input}
      value={value}
      onChange={(e) => {
        setFilter((prev) => {
          return {
            ...prev,
            price: {
              ...prev.price,
              [type]: e.target.value,
            },
          };
        });
      }}
    />
  );
};

export { Input };
