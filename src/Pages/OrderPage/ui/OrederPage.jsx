import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { CartItem } from "../../../components/CartItem";
import { NumberFormatter } from "../../../utils/NumberFormatter";

import cls from "./OrderPage.module.scss";
import { Btn } from "../../../components/Btn";
import { createOrder } from "../../../api";
import { useNavigate } from "react-router-dom";
import { sendingForm } from "../../../sendingForm/sendingForm";

const OrderPage = () => {
  const {
    information,
    totalCount,
    totalAmount,
    handlePlus,
    handleMinus,
    setCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("Ivan");
  const [email, setEmail] = useState("i@mail.ru");
  const [pending, setPending] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();

    const order = {
      name,
      email,
      information,
      totalCount,
      totalAmount,
    };
    setPending(true);
    setTimeout(async () => {
      let result = await createOrder(order);

      if (Object.keys(result)) {
        sendingForm(order);
        setPending(false);
        setCart([]);
        navigate("/orderSuccess");
      }
    }, 2000);
  };

  const cartItemsHTML = () => {
    if (information && information.length) {
      return (
        <div className={cls.body}>
          <div className={cls.items}>
            {information.map((productInfo, index) => {
              return (
                <CartItem
                  key={index}
                  productInfo={productInfo}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                />
              );
            })}
          </div>

          <div className={cls.info}>
            <p>Общее количество товара = {totalCount}</p>
            <p>
              Общая стоимость товара = {NumberFormatter.format(totalAmount)}
            </p>
          </div>
        </div>
      );
    } else {
      return <h1 className={cls.emptyCard}>Корзина пустая</h1>;
    }
  };

  return (
    <article>
      <div className="containerSmall">
        <h1 className={cls.title}>Ваш заказ</h1>
        {cartItemsHTML()}
        <div className={cls.orderForm}>
          <h1 className={cls.title}>Оформить заказ</h1>
          <form action="" className={cls.form}>
            <input
              disabled={pending}
              type="text"
              placeholder="Name"
              className={cls.input}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              disabled={pending}
              type="text"
              placeholder="email"
              className={cls.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Btn
              title={"Оформить заказ"}
              onClick={(e) => formHandler(e)}
              disabled={pending}
            />
          </form>
        </div>
      </div>
    </article>
  );
};

export { OrderPage };
