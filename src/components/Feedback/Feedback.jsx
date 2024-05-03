import clsx from "clsx";
import styles from "./Feedback.module.css";
import Notification from "../Notification/Notification";

const Feedback = ({ votes, totalFeedback, positivePercentage }) => {
  if (totalFeedback === 0) {
    return <Notification />;
  }

  return (
    <div className={clsx(styles.fdbContainer)}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;