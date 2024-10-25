import cls from "./Categories.module.scss";

const CatListItem = ({ title, slug, activeCategory, clickHandler }) => {
  let activeClass;
  if (activeCategory) {
    activeClass =
      activeCategory.title == title ? `${cls.active}` : `${cls.link}`;
  }

  return (
    <li>
      <a
        className={activeClass}
        data-cat={slug}
        href="#!"
        onClick={clickHandler}
      >
        {title}
      </a>
    </li>
  );
};

export { CatListItem };
