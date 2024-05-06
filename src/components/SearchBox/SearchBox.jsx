import clsx from "clsx";
import styles from "./Description.module.css";

export default function  Description () {
    return (
        <>
        <h1 className={clsx(styles.titleCafe)}>Sip Happens Café
        </h1>
        <p className={clsx(styles.descCafe)}>Please leave your feedback about our service by selecting one of the options below.
        </p>
        </>
    )
}