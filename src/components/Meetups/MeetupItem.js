import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";
import Card from "../UI/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favCtx = useContext(FavoritesContext);
  const itemIsFavorite = favCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    const favoriteMeetup = {
      id: props.id,
      title: props.title,
      image: props.image,
      address: props.address,
      description: props.description,
    };

    if (itemIsFavorite) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorite(favoriteMeetup);
    }
  };

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {!itemIsFavorite ? "Add to Favorites" : "Remove from Favorites"}
          </button>
        </div>  
      </li>
    </Card>
  );
};

export default MeetupItem;
