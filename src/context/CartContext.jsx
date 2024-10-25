import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage/useLocalStorage";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [information, setInformation] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (!cart.length) {
      setInformation([]);
      return;
    }

    let params = "";

    cart.forEach((item) => {
      if (!params) {
        params += "?id=" + item.id;
      } else {
        params += "&id=" + item.id;
      }
    });

    fetchProducts(params).then((data) => {
      const dataWithCount = data.map((item) => {
        const cartEl = cart.find((cartItem) => {
          return cartItem.id === item.id;
        });

        return {
          ...item,
          count: cartEl.count,
        };
      });

      setInformation(dataWithCount);
    });
  }, [cart]);

  useEffect(() => {
    setTotalCount(
      information.reduce(function (sum, elem) {
        return sum + elem.count;
      }, 0)
    );

    setTotalAmount(
      information.reduce(function (sum, elem) {
        return sum + elem.count * elem.price;
      }, 0)
    );
  }, [information]);

  const handlePlus = (id) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id !== id) return cartItem;
      return {
        ...cartItem,
        count: cartItem.count + 1,
      };
    });

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleMinus = (id) => {
    const cartItem = cart.find((el) => el.id === id);

    if (cartItem.count < 2) {
      removeFromCart(id);
      return;
    }

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          count: item.count - 1,
        };
      });

      setCart(newCart);
    }
  };

  const addToCart = (id) => {
    const newCart = () => {
      let productExists = cart.some((item) => item.id === id);

      if (productExists) {
        let newCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
        return newCart;
      } else {
        let newCart = [...cart, { id: id, count: 1 }];
        return newCart;
      }
    };

    setCart(newCart);
    setCartOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        information,
        setInformation,
        totalCount,
        setTotalCount,
        totalAmount,
        setTotalAmount,
        cartOpen,
        setCartOpen,
        handlePlus,
        handleMinus,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
