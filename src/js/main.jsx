import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';



function SimpleCounter(props){
  return (
    <div className='bigCounter'>
      <div className='calendar'>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className='four'>{props.digitFour}</div>
      <div className='trhee'>{props.digitThree}</div>
      <div className='two'>{props.digitTwo}</div>
      <div className='one'>{props.digitOne}</div>
    </div>
  );
}


let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  counter++
  const digitOne = counter % 10;
  const digitTwo = Math.floor(counter / 10) % 10;
  const digitThree = Math.floor(counter / 100) % 10;
  const digitFour = Math.floor(counter / 1000) % 10;
  
  root.render(
  <React.StrictMode>
    <SimpleCounter
    digitOne={digitOne}
    digitTwo={digitTwo}
    digitThree={digitThree}
    digitFour={digitFour}
    />
  </React.StrictMode>
);
},1000);
