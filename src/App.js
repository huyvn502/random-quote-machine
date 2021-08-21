import { useEffect } from 'react';
import QuoteBox from './components/QuoteBox';
import './App.scss';

function App() {
  const changeColor = () => {
    const colorList = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
    // Random color value used for theme of app
    const colorUsed = colorList[Math.floor(Math.random() * 12)];

    document.getElementById("App").style.background = colorUsed;
    document.getElementById("App").style.color = colorUsed;
    document.getElementById("App").style.transition = "background 0.8s linear 0.2s, color 0.8s linear 0.2s";

    document.getElementById("tweet-quote").style.backgroundColor = colorUsed;
    document.getElementById("status-quote").style.backgroundColor = colorUsed;
    document.getElementById("new-quote").style.backgroundColor = colorUsed;
  }
  useEffect(() => {
    changeColor();
  }, []);
  return (
    <div id="App">
      <QuoteBox changeThemeColor={changeColor}></QuoteBox>
    </div>
  );
}

export default App;
