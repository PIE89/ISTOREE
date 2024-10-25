import { NumberFormatter } from "../../../utils/NumberFormatter";
import cls from "./CartItem.module.scss";
import Minus from "./minus.svg";
import Plus from "./plus.svg";

const CartItem = ({ productInfo, handleMinus, handlePlus }) => {
  return (
    <div className={cls.cart}>
      <div className={cls.info}>
        <div className={cls.imgContainer}>
          <img
            src={`./../img/${productInfo.imgName}.jpg`}
            srcSet={`./../img/${productInfo.imgName}@2x.jpg 2x`}
            alt="imgCard"
            className={cls.img}
          />
        </div>

        <div className={cls.description}>
          <span className={cls.title}>{productInfo.title}</span>
          <span className={cls.price}>
            {NumberFormatter.format(productInfo.price)}
          </span>
        </div>
      </div>

      <div className={cls.count}>
        <button
          className={cls.button}
          onClick={() => handleMinus(productInfo.id)}
        >
          <img src={Minus} alt="minus" />
        </button>
        <input
          type="text"
          name=""
          value={productInfo.count}
          className={cls.input}
          disabled
        />
        <button
          className={cls.button}
          onClick={() => handlePlus(productInfo.id)}
        >
          <img src={Plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export { CartItem };
