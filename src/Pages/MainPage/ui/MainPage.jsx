import { useContext } from "react";
import cls from "./MainPage.module.scss";
import { AppContext } from "./../../../App";
import { Categories } from "./../../../components/Categories";
import { Filter } from "../../../components/Filter";
import { Card } from "../../../components/Card/ui/Card";
import { PriceReactSelect } from "../../../components/PriceReactSelect";
import { Empty } from "../../../components/Empty";
import { Error } from "../../../components/Error";

const MainPage = () => {
  const { products } = useContext(AppContext);

  if (!products) {
    return <Error message="Нет продуктов для отображения" />;
  }

  return (
    <section className={cls.main}>
      <div className="container">
        <div className={cls.grid}>
          <aside className={cls.aside}>
            <Categories />

            <Filter />
          </aside>
          <div className={cls.table}>
            <div className={cls.select}>
              <PriceReactSelect />
            </div>

            {products.length ? (
              products.map((product, index) => {
                return <Card product={product} key={index} />;
              })
            ) : (
              <Empty message={"Товаров с заданными параметрами нет."} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export { MainPage };
