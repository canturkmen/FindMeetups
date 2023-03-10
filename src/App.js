import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/FavoriteMeetups";
import NewMeetupPage from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
