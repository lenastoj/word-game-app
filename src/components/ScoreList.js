import React, { useEffect, useState } from "react";

const ScoreList = ({ score }) => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    score?.total && setTotalScore(totalScore + score.total);
  }, [score]);

  return (
    <div className="main-right">
      {score ? (
        <div className="main-right-wrap">
          <h4 className="score">Scores for '{score.word}':</h4>
          <p className="label-score">
            🎉 Unique letters: {score.uniqueLetters}
          </p>
          <p className="label-score">
            🥈 Almost palindrome: {score.almostPalindrome}
          </p>
          <p className="label-score">🥇 Palindrome: {score.palindrome}</p>

          <h3 className="label-highscore">💯 Total score: {totalScore}</h3>
        </div>
      ) : (
        <div className="main-right-wrap">
          <h4 className="score">Scores by categories:</h4>
          <p className="label-score">🎉 Unique letters: 0</p>
          <p className="label-score">🥈 Almost palindrome: 0</p>
          <p className="label-score">🥇 Palindrome: 0</p>
          <h3 className="label-highscore">💯 Total score: 0</h3>
        </div>
      )}
    </div>
  );
};

export default ScoreList;
