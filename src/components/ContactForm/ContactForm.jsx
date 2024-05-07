import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  contactname: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
  number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
});

const ContactForm = ({ addNewContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: Date.now(), // Generate unique ID for the new contact
      name: values.contactname,
      number: values.number
    };
    addNewContact(newContact); // Pass the new contact to the parent component
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ contactname: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ handleSubmit }) => (
        <Form className={styles.inputForm} onSubmit={handleSubmit}>
          <div className={styles.inputSection}>
            <label htmlFor="contactname">Name</label>
            <Field className={styles.inputField} type="text" name="contactname" id="contactname" />
            <ErrorMessage name="contactname" component="span" />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="number">Number</label>
            <Field className={styles.inputField} type="text" name="number" id="number" />
            <ErrorMessage name="number" component="span" />
          </div>
          <button className={styles.inputBtn} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;