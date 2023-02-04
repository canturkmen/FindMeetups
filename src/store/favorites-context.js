import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: (favoriteMeetupData) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetupData) => {
    setUserFavorites((prevStata) => {
      return [...prevStata, favoriteMeetupData];
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    favoritesCount: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
