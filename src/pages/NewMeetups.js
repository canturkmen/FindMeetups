import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  const formSubmitHandler = (enteredData) => {
    fetch(
      "https://react-meetup-bc370-default-rtdb.firebaseio.com//meetups.json",
      {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1 style={{ "text-align": "center" }}>Add a New Meetup</h1>
      <NewMeetupForm onFormSubmitted={formSubmitHandler} />
    </section>
  );
};

export default NewMeetupPage;
