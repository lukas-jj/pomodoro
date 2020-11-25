import React, { useState, useEffect } from 'react';


function App() {
  const initialTime = 900;
  const initialBreakTime = 300;
  const [session, setSession] = useState(4)
  const [isRunning, setIsRunning] = useState(false)
  const [timer, setTimer] = useState(initialTime)
  const [resetTime, setResetTime] = useState(initialTime)
  const [breakTimer, setBreakTimer] = useState(300)
  const [displayBreak, setDisplayBreak] = useState(initialBreakTime)
  const [displayWork, setDisplayWork] = useState(initialTime)
  const [resetBreakTime, setResetBreakTime] = useState(initialBreakTime)
  const [startBreak, setStartBreak] = useState(false)
  const [pauseBreak, setPauseBreak] = useState(true)
  const [dTime, setDTime] = useState("")
  const [wowScore, setWowScore] = useState(0)

  let time = new Date(timer * 1000).toISOString().substr(11, 8);
  let breakTime = new Date(breakTimer * 1000).toISOString().substr(11, 8);


  let displayBreakTime = new Date(displayBreak * 1000).toISOString().substr(11, 8);

  const dbseconds = new Date(displayBreak * 1000).toISOString().substr(17, 2);
  const dbminutes = new Date(displayBreak * 1000).toISOString().substr(14, 2);
  const dbhours = new Date(displayBreak * 1000).toISOString().substr(11, 2);

  let displayWorkTime = new Date(displayWork * 1000).toISOString().substr(11, 8);

  const dwseconds = new Date(displayWork * 1000).toISOString().substr(17, 2);
  const dwminutes = new Date(displayWork * 1000).toISOString().substr(14, 2);
  const dwhours = new Date(displayWork * 1000).toISOString().substr(11, 2);


  const seconds = new Date(timer * 1000).toISOString().substr(17, 2);
  const minutes = new Date(timer * 1000).toISOString().substr(14, 2);
  const hours = new Date(timer * 1000).toISOString().substr(11, 2);

  const breakSeconds = new Date(breakTimer * 1000).toISOString().substr(17, 2);
  const breakMinutes = new Date(breakTimer * 1000).toISOString().substr(14, 2);
  const breakHours = new Date(breakTimer * 1000).toISOString().substr(11, 2);


  function sessionIncrement() {
    setIsRunning(false)
    resetTimer()
    setSession(prevSession => session + 1)
  }

  function sessionDecrement() {
    if (session > 0) {
      setIsRunning(false)
      setSession(prevSession => prevSession > 0 && prevSession - 1)
    }
  }

  function resetTimer() {
    setIsRunning(false)
    setStartBreak(false)
    setTimer(resetTime)
  }

  function resetBreakTimer() {
    setBreakTimer(false)
    setPauseBreak(false)
    setBreakTimer(resetBreakTime)
  }

  function increment() {
    if (!isRunning) {
      setIsRunning(false);
      setTimer(prevTimer => prevTimer + 300);
      setResetTime(prevResetTime => prevResetTime + 300);
      setDisplayWork(prevTimer => prevTimer + 300)
    }
  }

  function sincrement() {
    if (!isRunning) {
      setIsRunning(false);
      setTimer(prevTimer => prevTimer + 60);
      setResetTime(prevResetTime => prevResetTime + 60);
      setDisplayWork(prevTimer => prevTimer + 60)
    }
  }

  function decrement() {
    if (!isRunning & timer > 300) {
      setIsRunning(false);
      setTimer(prevTimer => prevTimer - 300);
      setResetTime(prevResetTime => prevResetTime - 300);
      setDisplayWork(prevTimer => prevTimer - 300)
    }
  }

  
  function sdecrement() {
    if (!isRunning & timer > 60) {
      setIsRunning(false);
      setTimer(prevTimer => prevTimer - 60);
      setResetTime(prevResetTime => prevResetTime - 60);
      setDisplayWork(prevTimer => prevTimer - 60)
    }
  }

  function incrementBreak() {
    setPauseBreak(false);
    setBreakTimer(prevTimer => prevTimer + 300);
    setDisplayBreak(prevTimer => prevTimer + 300)
    setResetBreakTime(prevBreakTime => prevBreakTime + 300)
  }

  function sincrementBreak() {
    setPauseBreak(false);
    setBreakTimer(prevTimer => prevTimer + 60);
    setDisplayBreak(prevTimer => prevTimer + 60)
    setResetBreakTime(prevBreakTime => prevBreakTime + 60)
  }

  function decrementBreak() {
    if (breakTimer > 300) {
      setPauseBreak(false);
      setBreakTimer(prevTimer => prevTimer - 300);
      setDisplayBreak(prevTimer => prevTimer - 300)
    }
  }

  function sdecrementBreak() {
    if (breakTimer > 60) {
      setPauseBreak(false);
      setBreakTimer(prevTimer => prevTimer - 60);
      setDisplayBreak(prevTimer => prevTimer - 60)
    }
  }

  function start() {
    setIsRunning(true);
    setStartBreak(false);
  }

  function startBreakTimer() {
    setPauseBreak(true)
    setStartBreak(true)
    console.log(startBreak, pauseBreak)
  }


  function pause() {
    setIsRunning(false)
  }

  function breakPause() {
    setPauseBreak(false)
  }

  function resetSession() {
    sessionIncrement()
    setIsRunning(false)
    setStartBreak(false)
    setTimer(resetTime)
  }

  function breakClick() {
    setStartBreak(true)
    setPauseBreak(false)
    setIsRunning(false)
  }

  function workClick() {
    resetTimer()
  }

  function changeTime(e) {

    var hoursT = Math.floor(e.target.value / 60);
    var minutesT = e.target.value % 60;
    setDTime(hoursT + ":" + minutesT);
  }

  console.log(dTime)

  // function changeTime(num)
  //  { 
  //   var hours = Math.floor(num / 60);  
  //   var minutes = num % 60;
  //   return hours + ":" + minutes;         
  // }

  function incrementWowScore() {
    setWowScore(prevWowScore => prevWowScore + 1)
  }

  function rewards() {
    document.getElementById("rewards").innerHTML += "<img class='rewardsGif' src='https://i.imgur.com/rIZqWbu.gif' />";
  }

  function rewards2() {
    document.getElementById("rewards").innerHTML += "<img class='rewardsGif' src='https://media1.tenor.com/images/9754d2117f0c62543035cdf65d709933/tenor.gif?itemid=8702504' />";

  }

  // let rewardArr = ["https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png", "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png", "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"]

  const timerAudio = new Audio("https://www.myinstants.com/media/sounds/greenscreen-wow.mp3");
  const breakAudio = new Audio('http://home.freeuk.com/podling/WHIP.WAV')
  const sessionFinish = new Audio('http://chataholic2.homestead.com/files/woohoo.wav')
  const yeBoi = new Audio("https://www.myinstants.com/media/sounds/mylongestyeahboyever.mp3")

  useEffect(() => {
    if (isRunning && session > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
        console.log("timer" + timer)
      }, 1000);
      if (timer === 0 && session > 0) {
        sessionDecrement()
        setIsRunning(false)
        setTimer(resetTime)
        setStartBreak(true)
        setPauseBreak(false)
        setBreakTimer(initialBreakTime)
        rewards()
        incrementWowScore()
        if (session > 1) {
          timerAudio.load()
          timerAudio.play()
          // setTimeout(() => {
          //   alert("Time for a break!")
          // }, 1000)
        }
      }

      return () => clearInterval(interval)
    }
    else if (session === 0) {

      // setTimeout(() => {
      //   alert("Good work!")
      // }, 100)
      setStartBreak(false)
      setSession(4)
      // rewards2()
    }
  }, [isRunning, session, timer])

  useEffect(() => {
    if (pauseBreak && startBreak && session > 0) {
      const interval2 = setInterval(() => {
        setBreakTimer(prevBreakTime => prevBreakTime > 0 && prevBreakTime - 1)
        console.log("break" + breakTimer)
      }, 1000);
      if (breakTimer === 0 && session > 0) {
        setStartBreak(false)
        // setIsRunning(true)
        setBreakTimer(initialBreakTime)
        breakAudio.load()
        breakAudio.play()
        // setTimeout(() => {
        //   alert("Back to work!")
        // }, 1000)
      }
      return () => clearInterval(interval2)
    }
  }, [startBreak, breakTimer, startBreak, pauseBreak])

  return (
    <div>
      <div className="App">
        <div className="Session" >
          <h1>Session</h1>
          <div className="sessionDisplay">
            <button className="buttons" onClick={session > 1 ? () => sessionDecrement() : null}>-</button>
            <div className="sessionNumber">{session}</div>
            <button className="buttons" onClick={() => sessionIncrement()}>+</button>
          </div>
        </div>
        <div id="wowScore">
          <h1 > Wow Score </h1>
          <h1>{wowScore}</h1>
        </div>
        <div className="displayTimers" id="workTimer" style={startBreak ? { display: "none" } : { display: "", backgroundColor: "blue" }}>
          <button id="workWork" className="breakOrWork" onClick={() => workClick()}>Work</button>
          <button id="workBreak" className="breakOrWork" onClick={() => breakClick()} >Break</button>
          <div class="hms">
            <h1 style={hours === "00" ? { display: "none" } : { display: "" }}>{hours}h</h1>
            <h1>{minutes}m</h1>
            <h1>{seconds}s</h1>
          </div>
          <button class="impbutton" style={isRunning ? { display: "none" } : { display: "" }} onClick={() => start()}>Start</button>
          <button class="impbutton" style={!isRunning ? { display: "none" } : { display: "" }} onClick={() => pause()} >Stop</button>
          <button class="impbutton" onClick={() => resetTimer()}>Reset</button>
        </div>

        <div className="displayTimers" id="breakTimer" style={startBreak ? { display: "", backgroundColor: "red" } : { display: "none" }}>
          <button id="breakWork" className="breakOrWork" style={startBreak ? {} : null} onClick={() => workClick()}>Work</button>
          <button id="breakBreak" className="breakOrWork" onClick={() => breakClick()} >Break</button>
          <div class="hms">
            <h1 style={breakHours === "00" ? { display: "none" } : { display: "" }}>{breakHours}h</h1>
            <h1>{breakMinutes}m</h1>
            <h1>{breakSeconds}s</h1>
          </div>
          <button class="impbutton" style={pauseBreak ? { display: "none" } : { display: "" }} onClick={() => startBreakTimer()}>Start</button>
          <button class="impbutton" style={!pauseBreak ? { display: "none" } : { display: "" }} onClick={() => breakPause()} >Stop</button>
          <button class="impbutton" onClick={() => resetBreakTimer()}>Reset</button>
        </div>

        <div id="setTimers">
          <div class="Session">
            <h1 className="TitleDisplay">Set Work Timer </h1>
            <div className="sessionDisplay">
            <button className="buttons" onClick={() => sdecrement()}>-1</button>
              <button className="buttons" onClick={() => decrement()}>-5</button>
              <div className="TimeDisplay" >
                <div class="disTime">
                  <h1 style={dwhours === "00" ? { display: "none" } : { display: "" }}>{dwhours}h</h1>
                  <h1>{dwminutes}m</h1>
                </div>
              </div>
              <button className="buttons" onClick={() => increment()}>+5</button>
              <button className="buttons" onClick={() => sincrement()}>+1</button>
              
            </div>
          </div>
          <div class="Session">
            <h1 className="TitleDisplay" >Set Break Timer</h1>
            <div className="sessionDisplay">
            <button className="buttons" onClick={() => sdecrementBreak()}>-1</button>
              <button className="buttons" onClick={() => decrementBreak()}>-5</button>
              <div className="TimeDisplay"> 
              <div class="disTime">
                  <h1 style={dbhours === "00" ? { display: "none" } : { display: "" }}>{dbhours}h</h1>
                  <h1>{dbminutes}m</h1>
                </div>
               </div>
              <button className="buttons" onClick={() => incrementBreak()}>+5</button>
              <button className="buttons" onClick={() => sincrementBreak()}>+1</button>
            </div>
          </div>
        </div>
        {/* 
        <div class="newDisplay">
        <input placeholder={hours + ":" + minutes + ":" + seconds} onChange= {(e) => changeTime(e)} type="number"></input>
        </div> */}
      </div>
      <div id="rewards">
      </div>
    </div>
  );
}

export default App;
