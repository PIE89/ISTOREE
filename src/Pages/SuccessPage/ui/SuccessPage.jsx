import cls from "./SuccessPage.module.scss";

const SuccessPage = () => {
  return (
    <article>
      <div className="containerSmall">
        <h1 className={cls.title}>Ваш заказ успешно создан</h1>
      </div>
    </article>
  );
};

export { SuccessPage };
