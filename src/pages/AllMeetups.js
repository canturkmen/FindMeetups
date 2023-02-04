import { useEffect, useState } from "react";
import MeetupList from "../components/Meetups/MeetupList";

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-meetup-bc370-default-rtdb.firebaseio.com//meetups.json"
      );

      const data = await response.json();
      const loadedMeetups = [];

      for (const key in data) {
        loadedMeetups.push({
          id: key,
          ...data[key],
        });
      }

      setIsLoading(false);
      setMeetups(loadedMeetups);
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 style={{ "text-align": "center" }}>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
