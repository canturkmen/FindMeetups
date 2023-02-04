import { useContext } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import { FavoritesContext } from "../store/favorites-context";

const FavoritesPage = () => {
  const favCtx = useContext(FavoritesContext);  

  let content;

  if(favCtx.favoritesCount === 0) {
    content = <h3 style={{'text-align': 'center'}}>You don't have any favorites.</h3>
  } else {
    content = <MeetupList meetups={favCtx.favorites}/>;
  }

  return (
    <section>
      <h1 style={{'text-align': 'center'}}>My Favorites</h1>
      {content}
    </section>  
  );
};

export default FavoritesPage;
