import React, { useState, useReducer } from "react";
import Button from "../Button/Button";
// import "./AIDuck.css";

/** This component function creates/renders a ROBOT AI CYBER DUCK that accepts user inputs and returns funnies*/
function CreateAiDuck() {
  const [userInput, setUserInput] = useState("");
  const [isShownDuckReply, setIsShownDuckReply] = useState(false);
  const [submitButtonShown, setSubmitButtonShown] = useState(true);
  const [resetButtonShown, setResetButtonShown] = useState(false);
  const sadKeanu =
    "https://media.vanityfair.com/photos/5df907d66056aa0008852c0a/master/pass/the-decade-in-content-sad-keanu.jpg";
  const happyAkita =
    "https://sayingimages.com/wp-content/uploads/super-happy-memes.jpg";
  const robotimg =
    "https://thumbs.dreamstime.com/b/cartoon-silly-robot-looking-55524172.jpg";
  const [duckResponse, dispatch] = useReducer(reducer, {
    emotion: "",
    image: "",
  });

  /** This reducer function takes in the input of a string give by a user and returns a
   * relevant image and reply based upon keywords in that string
   */
  function reducer(duckResponse, action) {
    switch (action.keyWord) {
      case "happy":
        return {
          emotion: "I am so glad you are happy!! Check this out...",
          image: happyAkita,
        };
      case "sad":
        return {
          emotion: "I am so sorry you are sad!! Check this out...",
          image: sadKeanu,
        };
      default:
        return {
          emotion: "Sorry I am a RobotDuck, tell me if you are happy or sad...",
          image: robotimg,
        };
    }
  }
  /** This takes in a user input that replies to a question and saves it to a state to be used later*/
  function handleUserInputTextChange(event) {
    setUserInput(event.target.value);
  }

  /** This function takes a string and outputs a keyword
   * @param {state} userInput This is a state that holds a string input given by the user through an event handler
   */
  function identifyKeyWords(userInput) {
    const keyWords = ["happy", "sad"];
    const stringArray = userInput.split(" ");
    const matchArray = keyWords.filter((word) => stringArray.includes(word));
    dispatch({ keyWord: matchArray[0] }); //for now just the first word found
  }

  function handleClickGetAdvice() {
    //calls function with state
    identifyKeyWords(userInput);
    setIsShownDuckReply(!isShownDuckReply);
    setUserInput("");
    setResetButtonShown(!resetButtonShown);
    setSubmitButtonShown(!submitButtonShown);
  }

  function handleClickReset() {
    setResetButtonShown(!resetButtonShown);
    setSubmitButtonShown(!submitButtonShown);
    setIsShownDuckReply(!isShownDuckReply);
  }

  return (
    <div className="form-container-parent">
      <form>
        <h1>Robot AI Cyber Ducky</h1>
        {submitButtonShown && (
          <textarea
            placeholder="Hello, I am a Duck. What can I do for you?"
            type="text"
            value={userInput}
            onChange={handleUserInputTextChange}
          ></textarea>
        )}
      </form>
      {isShownDuckReply && (
        <textarea type="text" value={duckResponse.emotion} readOnly></textarea>
      )}
      <div className="submit-button-container">
        {submitButtonShown && (
          <Button
            className="submit-advice-button"
            text={"Click for helpful duck advice"}
            onClick={handleClickGetAdvice}
          />
        )}
      </div>
      {resetButtonShown && (
        <Button
          className="reset-advice-button"
          onClick={handleClickReset}
          text={"Need more robot advice?"}
        />
      )}
      {resetButtonShown && (
        <div>
          <img
            alt="happy/sad"
            src={duckResponse.image}
            style={{ height: "400px" }}
          />
        </div>
      )}
    </div>
  );
}

export default CreateAiDuck;
