import { useContext } from "react";
import { AppContext } from "../../../App";
import { CatListItem } from "./CatListItem";
import cls from "./Categories.module.scss";

const Categories = () => {
  const { categories, filter, setFilter } = useContext(AppContext);

  const clickHandler = (e) => {
    e.preventDefault();

    const currentCategory = categories.find(
      (category) => category.slug === e.target.dataset.cat
    );

    setFilter((prev) => {
      return {
        ...prev,
        category: currentCategory,
      };
    });
  };

  return (
    <div className={cls.widget}>
      <h2 className={cls.title}>Категории</h2>

      <ul className={cls.catList}>
        {categories &&
          categories.map((category) => {
            return (
              <CatListItem
                key={category.id}
                slug={category.slug}
                title={category.title}
                activeCategory={filter.category}
                clickHandler={clickHandler}
              />
            );
          })}
      </ul>
    </div>
  );
};

export { Categories };
