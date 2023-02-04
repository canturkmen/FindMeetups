import { useRef } from "react";
import Card from "../UI/Card";

import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    
    const inputData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
    };

    props.onFormSubmitted(inputData);

    titleInputRef.current.value = '';
    imageInputRef.current.value = '';
    addressInputRef.current.value = '';
    descriptionInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleInputRef} type="text" id="title" />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageInputRef} type="url" id="image" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressInputRef} type="text" id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea ref={descriptionInputRef} id="description" required rows="5" />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
