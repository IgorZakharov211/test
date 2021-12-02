import React from "react";
import './Counter.scss';

function Counter(props){
  return(
    <ul className={`counter ${props.className}__counter`}>
      {
        props.arr.map((item) => {
          return(
            <CounterItem 
              count={props.count} 
              step={item} 
              key={item} 
              id={item}
              length={props.arr.length} 
              onClick={props.onClick}
            />
          )
        })
      }
    </ul>
  )
}

function CounterItem(props){
  return(
    <li className="counter__item">
      <div className={`counter__border ${props.count === props.step ? "counter__border_active" : ""}`}>
        <button 
          className={`counter__button ${props.count >= props.step ? "counter__button_active" : ""}`}
          id={props.id}
          onClick={props.onClick}
        >
          {props.step}
        </button>
      </div>
      {
        props.step < props.length && <div className={`counter__line ${props.count > props.step ? "counter__line_active" : ""}`}></div>
      }
    </li>
  )
}

export default Counter;