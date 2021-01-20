import React from 'react';

import './card.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="cat"
      src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}
    />
    <h1>{props.cat.name}</h1>
    <h6>@{props.cat.username}</h6>
  </div>
);
