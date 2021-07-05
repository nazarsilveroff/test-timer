import { TimerWraper } from "./TimerStyled";
import React, { useEffect, useState } from "react";
import { debounce } from "debounce";
import { v4 as id } from "uuid";
const initialState = {
  isOn: false,
  isWait: false,
  res: [],
};
const Timer = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let interval = null;
    if (state.isWait && state.isOn === true) {
      interval = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          time: prevState.time + 10,
          hours: (
            "0" +
            Math.floor(
              (prevState.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
          ).slice(-2),
          mins: (
            "0" + Math.floor((prevState.time % (1000 * 60 * 60)) / (1000 * 60))
          ).slice(-2),
          secs: ("0" + Math.floor((prevState.time % (1000 * 60)) / 1000)).slice(
            -2
          ),
        }));
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.isOn, state.isWait]);

  const hendleStartStop = () => {
    setState((prevState) => ({
      ...prevState,
      isOn: !prevState.isOn,
      isWait: true,
      hours: null,
      mins: null,
      secs: null,
      time: null,
    }));
    if (state.hours) {
      state.res.push({
        hours: state.hours,
        mins: state.mins,
        secs: state.secs,
      });
    }
  };
  const hendleWait = () => {
    setState((prevState) => ({
      ...prevState,
      isWait: !prevState.isWait,
    }));
  };
  const hendleReset = () => {
    setState({
      isOn: false,
      isWait: false,
      res: [],
    });
  };
  return (
    <TimerWraper>
      <div className="box1">
        <label htmlFor="">
          Часов
          <p className="time">{state.hours || "XX"}</p>
        </label>
        <label htmlFor="">
          Минут
          <p className="time">{state.mins || "XX"}</p>
        </label>
        <label htmlFor="">
          Секунд
          <p className="time">{state.secs || "XX"}</p>
        </label>
      </div>

      <div className="box2">
        <button onClick={hendleStartStop} className="btn">
          {state.isOn ? "stop" : "start"}
        </button>
        <button onClick={debounce(hendleWait, 300)} className="btn">
          Wait
        </button>
        <button onClick={hendleReset} className="btn">
          Reset
        </button>
        <ul className="res-list">
          {state.res?.map((item) => (
            <li key={id()} className="res-item">
              <span>{item.hours}:</span>
              <span>{item.mins}:</span>
              <span>{item.secs}</span>
            </li>
          ))}
        </ul>
      </div>
    </TimerWraper>
  );
};

export default Timer;
