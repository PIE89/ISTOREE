import cls from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className="container">
        <div className={cls.copyright}>Copyright 2024</div>
      </div>
    </div>
  );
};

export { Footer };
