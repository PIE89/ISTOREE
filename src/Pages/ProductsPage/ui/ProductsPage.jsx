import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../api";
import cls from "./ProductsPage.module.scss";
import { Btn } from "../../../components/Btn";
import { CartContext } from "../../../context/CartContext";
import { NumberFormatter } from "../../../utils/NumberFormatter";

const ProductsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct(productId).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="container">
      {product && (
        <article className={cls.card}>
          <div className={cls.img}>
            <img
              src={`./../img/${product.imgName}.jpg`}
              srcSet={`./../img/${product.imgName}@2x.jpg`}
              alt={product.imgName}
            />
          </div>

          <div className={cls.description}>
            <h1 className={cls.title}>{product.title}</h1>
            <p className={cls.price}>{NumberFormatter.format(product.price)}</p>
            <span className={cls.text}>{product.desc}</span>
            <Btn title={"В корзину"} onClick={() => addToCart(product.id)} />
          </div>
        </article>
      )}
    </div>
  );
};

export { ProductsPage };
