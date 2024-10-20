import styles from "./menu-component.module.css";

import arrow_menu from "./../../images/arrow_menu.svg";

function MenuComponent({ icon, title, onClick }) {
  return (
    <div className={styles.menu_component}>
      <div className={styles.menu_component_container}>
        <img className={styles.menu_component__icon} src={icon} alt={icon} />
        <p className={styles.menu_component__text}>{title}</p>
      </div>
      <img src={arrow_menu} alt={arrow_menu} />
    </div>
  );
}

export default MenuComponent;
