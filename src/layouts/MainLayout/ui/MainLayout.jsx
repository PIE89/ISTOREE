import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import "./../../../assets/index.scss";
import { Error } from "../../../components/Error";
import { Loader } from "../../../components/Loader";
import { Cart } from "../../../components/Cart";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const MainLayout = ({ pageError, pageLoading }) => {
  const { cartOpen } = useContext(CartContext);

  return (
    <>
      <Header />
      {cartOpen && <Cart />}
      {pageLoading ? (
        <Loader />
      ) : pageError ? (
        <Error
          message={"Ошибка получения продуктов. Обратитесь к администратору"}
        />
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export { MainLayout };

/*
 
*/
