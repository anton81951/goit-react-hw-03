import { useState } from "react";
import clsx from "clsx";
import styles from "./App.module.css";
import contactData from "../contactListSrc.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contactData.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={clsx(styles.general)}>
      <h1 className={clsx(styles.title)}>Phone book</h1>
      <div>
        <SearchBox value={searchTerm} onChange={handleSearchChange} />
        <ContactList contacts={filteredContacts} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;