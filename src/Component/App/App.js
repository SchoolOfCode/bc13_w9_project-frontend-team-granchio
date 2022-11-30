import { useState, createContext } from 'react';
import './App.css';
import Button from '../Button/Button';
import Forum from '../Forum/forum';
import AIDuck from '../AIDuck/AIDuck.js';
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
  function touchedMaDuck() {
    setShowLandingPage(!showLandingPage);
    setIsShownForum(false);
    setAiDuckComponentShown(false);
  }

  function onClickDuck() {
    setShowLandingPage(!showLandingPage);
    setAiDuckComponentShown(true);
  }

  let toClickorNotToCLick = () =>
    showLandingPage
      ? console.log("don't touch my duck dude.")
      : touchedMaDuck();

  return (
    <header className="App-header">
      <div className="App">
        <img
          className="duck-img"
          alt="Duck says How are you feeling today?"
          src={showLandingPage ? speechDuck : homeDuck}
          onClick={toClickorNotToCLick}
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
                    onClick={onClickDuck}
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
