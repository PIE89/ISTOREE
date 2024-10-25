import cls from "./Cart.module.scss";
import Close from "./close.svg";
import { Btn } from "../../../components/Btn";
import { CartItem } from "../../CartItem";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { NumberFormatter } from "../../../utils/NumberFormatter";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    information,
    totalCount,
    totalAmount,
    setCartOpen,
    handlePlus,
    handleMinus,
  } = useContext(CartContext);

  const cartItemsHTML = () => {
    return information.map((productInfo, index) => {
      return (
        <CartItem
          key={index}
          productInfo={productInfo}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
      );
    });
  };

  return (
    <section className={cls.cart}>
      <header className={cls.header}>
        <h2 className={cls.title}>Корзина</h2>
        <button
          className={cls.closeBtn}
          onClick={() => {
            setCartOpen((prev) => !prev);
          }}
        >
          <img src={Close} alt="close-icon" />
        </button>
      </header>
      {information && !information.length ? (
        <h1 className={cls.emptyCard}>Корзина пустая</h1>
      ) : (
        <div className={cls.body}>
          <div className={cls.items}>{cartItemsHTML()}</div>

          <div className={cls.info}>
            <p>Общее количество товара = {totalCount}</p>
            <p>
              Общая стоимость товара = {NumberFormatter.format(totalAmount)}
            </p>
          </div>

          <div>
            <Link to={"./order"}>
              <Btn
                title={"Оформить заказ"}
                onClick={() => setCartOpen(false)}
              />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export { Cart };
