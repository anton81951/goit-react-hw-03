import clsx from "clsx";
import styles from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi";

const Contact = ({ contact: {name, number } }) => {
  
  return(
    <li  className={clsx(styles.contactContainer)}>
      <div>
        <div className={clsx(styles.nameBox)}>
          <HiUser />
          <p className={clsx(styles.nameSize)}>{name}</p>
        </div>
        <div className={clsx(styles.nameBox)}>
          <HiPhone />
          <p className={clsx(styles.nameSize)}>{number}</p>
        </div>
      </div>
      <button className={clsx(styles.buttonFrame)}>Delete</button>
    </li>
  );
};

export default Contact;