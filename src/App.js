import { useEffect, useState } from 'react';
import './App.css';
import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import StickDisplay from './components/StickDisplay/StickDisplay';
import WordDisplay from './components/WordDisplay/WordDisplay';
import  word_array  from "./words";

function App() {
  const [guessedState,setGuessedState]=useState([])
  const [guessState,setGuessState]=useState([])
  const [dialog,setDialog]=useState(false)
  const [dialogMessage,setDialogMessage]=useState("")
  const [hangState,setHangState]=useState(0)
  const [word,setWord]=useState("")
  const [danger,setDanger]=useState("")


  useEffect(()=>{
    let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index=Math.floor(Math.random() * 2241)
    setWord(word_array[index].toUpperCase())
    let temp_array=[]
    for(var i=0;i<alphabets.length;i++)
    {
        temp_array.push(alphabets.charAt(i))
    }
    setGuessState(temp_array)
    temp_array=[]
    for(i=0;i<word_array[index].length;i++)
    {
      temp_array.push("_")
    }
    setGuessedState(temp_array)
  },[])


  const buttonClickHandler=(char_item)=>{
    var guessedCopy=guessedState
    let newguessesState=guessState.filter((item)=>item!==char_item)
    var present=false;
    var winning=true;
    for(var i=0;i<word.length;i++)
    {
      if(word.charAt(i)===char_item)
      {
        present=true
        guessedCopy[i]=char_item
      }
      if(guessedCopy[i]==='_')
      {
        winning=false
      }
    }
    if(!present)
    { if(hangState===5)
      {
        setDialog(true)
        setDialogMessage("You lost :( The word was "+word)
      }
      setDanger("animation")
      setTimeout(()=>{setDanger("")},2000)
      setHangState(hangState+1)

    }
    setGuessState(newguessesState)
    setGuessedState(guessedCopy)
    if(winning)
    {
      setDialog(true)
      setDialogMessage("You Won :)")
    }

  }


  const resetGame=()=>{
    window.location.reload()
  }
  return (
    <div className="App">
      
      {
        (dialog)?<Dialog message={dialogMessage} reset={resetGame}/>:(
          <div>
      <Header/>
      <div className="container">
        <StickDisplay index={hangState} danger={danger}/>
        <WordDisplay char_array={guessedState}/>
      </div>
      <CharacterDisplay char_array={guessState} clickEvent={buttonClickHandler}/>
      </div>
        )
      }
    </div>
  );
}

export default App;
