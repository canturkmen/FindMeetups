import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../store/favorites-context";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">View All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add a New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites <span className={styles.badge}>{favCtx.favoritesCount}</span></Link>  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
