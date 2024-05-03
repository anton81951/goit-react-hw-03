import clsx from "clsx";
import styles from "./Options.module.css";

const Options = ({ votes, handleVote, totalFeedback, handleReset }) => {
  return (
    <div className={clsx(styles.btnContainer)}>
      <button className={clsx(styles.btnStyle)} onClick={() => handleVote("good")}>
        Good
      </button>
      <button className={clsx(styles.btnStyle)} onClick={() => handleVote("neutral")}>
        Neutral
      </button>
      <button className={clsx(styles.btnStyle)} onClick={() => handleVote("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(styles.btnStyle)} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;