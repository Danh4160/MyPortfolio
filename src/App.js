import logo from './logo.svg';
import './App.css';
import profile_pic from "./Images/profile_pic.jpg"
import MyIcon from "./Components/MyIcon"


function App() {
  return (
    <div className="App">
        <header className = "title">Dan Hosi</header>
        <img className = {profile_pic} src={profile_pic} alt =""></img>
        <p className ="description">In these difficult times, it is essential to get your daily dose 
        of memes. Click the Reddit logo below to access r/memes (Credits: Reddit). </p>
        <MyIcon></MyIcon>
    </div>
  );
}

export default App;
