import { useState } from "react";
import clsx from "clsx";
import styles from "./App.module.css";
import contactData from "../contactListSrc.json";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(contactData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={clsx(styles.general)}>
      <h1 className={clsx(styles.title)}>Phone book</h1>
      <ContactForm addNewContact={handleAddContact} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} searchTerm={searchTerm} />
    </div>
  );
};

export default App;