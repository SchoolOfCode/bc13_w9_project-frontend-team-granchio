import { useState, createContext } from "react";
import "./App.css";
import Button from "../Button/Button";
import Forum from "../Forum/forum";
import AIDuck from "../AIDuck/AIDuck.js";
import homeDuck from "./backtohomepageduck.png";
import speechDuck from "./duckwithspeach.png";

export const UserContext = createContext();

//w3 example of useContext seems to be for components
//that are in the same file? watch scandiMosh
//to see if he goes over importing to components that
//live in another file
function App() {
  const [isShownForum, setIsShownForum] = useState(false);
  const [AiDuckComponentShown, setAiDuckComponentShown] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const onClickShowForum = () => {
    setIsShownForum(true);
    setShowLandingPage(!showLandingPage);
  };

  function resetToHomepage() {
    setShowLandingPage(!showLandingPage);
    setIsShownForum(false);
    setAiDuckComponentShown(false);
  }

  function onClickAngryDuck() {
    setShowLandingPage(!showLandingPage);
    setAiDuckComponentShown(true);
  }

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
        <div>{AiDuckComponentShown && <AIDuck></AIDuck>}</div>
      </div>
    </header>
  );
}

export default App;
