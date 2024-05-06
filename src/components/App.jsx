import { useState, useEffect } from "react";
import contactData from "../contactListSrc.json"
import clsx from "clsx";
import styles from "./App.module.css"
import ContactList from "./ContactList/ContactList";

const App = () => {
  


  return (
    <div className={clsx(styles.general)}>
    <h1 className={clsx(styles.title)}>Phone book</h1>
    <div>
    <ContactList contacts={contactData} />
    </div>
  </div>
  );
};

export default App;