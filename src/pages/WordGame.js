import React from "react";
import "../styles/WordGame.css";
import Headline from "../components/Headline";
import ScoreList from "../components/ScoreList";
import { useGetScoreQuery } from "../queries/score.query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const WordGame = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const [searchInput, setSearchInput] = useState("");
  const [usedWords, setUsedWords] = useState([]);
  const { data: score, refetch, error } = useGetScoreQuery(searchInput);

  const formSubmitHandler = (data) => {
    const used = usedWords.includes(data.word);
    if (used) {
      setError("word", {
        message: `Already played with the word '${data.word}'! Use some other.`,
      });
      return;
    }
    setSearchInput(data.word);
    reset();
  };

  useEffect(() => {
    if (searchInput) {
      setUsedWords([...usedWords, searchInput]);
      refetch(searchInput);
    }
  }, [searchInput]);

  console.log(usedWords);
  return (
    <div
      className={
        errors.word?.message || error?.response?.data
          ? "container-error container"
          : "container"
      }
    >
      <Headline />
      <div className="main">
        <div className="main-left">
          <form onSubmit={handleSubmit(formSubmitHandler)} className="form">
            <input
              label="Word"
              type="string"
              className="form-input"
              placeholder="word..."
              {...register("word", {
                required: "Please enter the word",
              })}
            />
            {errors.word?.message && (
              <p className="form-error">{errors.word.message}</p>
            )}
            {error?.response.data && (
              <p className="form-error">
                {searchInput}: {error.response.data}
              </p>
            )}
            <button type="submit" className="btn btn-check">
              Check!
            </button>
          </form>
        </div>
        <ScoreList score={score} />
      </div>
    </div>
  );
};

export default WordGame;
