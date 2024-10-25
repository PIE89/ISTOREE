import { Link } from "react-router-dom";
import cls from "./Card.module.scss";
import { NumberFormatter } from "../../../utils/NumberFormatter";

const Card = ({ product }) => {
  return (
    <Link to={`product/${product.id}`} className={cls.card} key={product.id}>
      <img
        src={`./img/${product.imgName}.jpg`}
        srcSet={`./img/${product.imgName}@2x.jpg`}
        alt={product.imgName}
        className={cls.img}
      />

      <h4 className={cls.title}>{product.title}</h4>
      <p className={cls.price}>{NumberFormatter.format(product.price)}</p>
    </Link>
  );
};

export { Card };
