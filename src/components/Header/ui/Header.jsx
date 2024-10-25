import { Link } from "react-router-dom";
import { useContext } from "react";
import cls from "./Header.module.scss";
import CartImg from "./Cart.svg";
import { CartContext } from "../../../context/CartContext";

const Header = () => {
  const { setCartOpen } = useContext(CartContext);

  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.headerRow}>
          <Link to="/" className={cls.logo} onClick={() => setCartOpen(false)}>
            istore
          </Link>
          <button
            type="button"
            className={cls.btn}
            onClick={() => setCartOpen((prev) => !prev)}
          >
            <img src={CartImg} alt="icon" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
