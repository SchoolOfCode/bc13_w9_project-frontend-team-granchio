import { useState, createContext } from "react";
import "./App.css";
import Button from "../Button/Button";
import Forum from "../Forum/forum";
import CreateAiDuck from "../AIDuck/AIDuck.js";
import homeDuck from "./backtohomepageduck.png";
import speechDuck from "./duckwithspeach.png";
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import express from 'express'
export const UserContext = createContext();

//w3 example of useContext seems to be for components
//that are in the same file? watch scandiMosh
//to see if he goes over importing to components that
//live in another file
function App() {
  const [isShownForum, setIsShownForum] = useState(false);
  const [AiDuckComponentShown, setAiDuckComponentShown] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  /** this will render the correct component and unrender components no longer in use */
  const onClickShowForum = () => {
    setIsShownForum(true);
    setShowLandingPage(!showLandingPage);
  };

  /** This function causes the AngryDuckAi to render and removes the landing page component from rendering
   */
  function onClickAngryDuck() {
    setShowLandingPage(!showLandingPage);
    setAiDuckComponentShown(true);
  }

  /** triggered by toggleHomepage below */
  function resetToHomepage() {
    setShowLandingPage(!showLandingPage);
    setIsShownForum(false);
    setAiDuckComponentShown(false);
  }
  /** This ternary routes logic dependant on whether the landing page is shown or not. If it's not shown
   * it will call the function resetToHomepage, which will in turn return the user to the homepage by
   * rendering the correct components and undrendering the ones no longer in use
   */
  const toggleHomepage = () =>
    showLandingPage
      ? console.log("don't touch my duck dude.")
      : resetToHomepage();

  return (
    <header className="App-header">
      <div className="App">
        <img
          className="duck-img"
          alt="Duck says How are you feeling today?"
          src={showLandingPage ? speechDuck : homeDuck}
          onClick={toggleHomepage}
        />
        {showLandingPage && (
          <>
            <div className="home-container">
              <div className="anon-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">CHEER ME UP</h2>
                  <p className="home-desc">
                    Submit your mood to your personal duck to brighten your day
                  </p>
                  <Button
                    className={"angry-duck-button"}
                    onClick={onClickAngryDuck}
                    text={"Angry Duck"}
                  />
                </div>
              </div>
              <div className="angry-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">SUPPORT EACH OTHER</h2>
                  <p className="home-desc">
                    Talk anonymously to your fellow bootcampers and share
                    struggles
                  </p>
                  <Button
                    className={"anon-duck"}
                    text={"Anon Duck"}
                    onClick={onClickShowForum}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {isShownForum && (
          <UserContext.Provider value={setIsShownForum}>
            <Forum></Forum>
          </UserContext.Provider>
        )}
        <div>{AiDuckComponentShown && <CreateAiDuck></CreateAiDuck>}</div>
      </div>
    </header>
  );
}

export default App;
