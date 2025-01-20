import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";
import Header from "./components/Header.jsx";

function App() {
  console.log('App component rendered');
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 0,
    expectedReturn: 6,
    duration: 10
  });
  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevValue => ({...prevValue, [inputIdentifier]: +newValue}));
    console.log(userInput);
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter duration bigger that zero</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>

  )
}

export default App
