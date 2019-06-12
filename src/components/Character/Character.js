import React from 'react';
import './Character.css';

const Character = props => (
  <div className="card" onClick={(event) => props.clickEvent(event.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;
