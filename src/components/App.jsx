import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  const [votes, setVotes] = useState(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes"));
    return storedVotes || { good: 0, neutral: 0, bad: 0 };
  });

  const handleVote = (type) => {
    const updatedVotes = {
      ...votes,
      [type]: votes[type] + 1
    };
    setVotes(updatedVotes);
  };

  const handleReset = () => {
    localStorage.removeItem("votes");
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = votes.good + votes.neutral + votes.bad;

  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((votes.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  return (
    <>
      <Description />
      <Options votes={votes} handleVote={handleVote} totalFeedback={totalFeedback} handleReset={handleReset} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback votes={votes} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
      )}
    </>
  );
};

export default App;