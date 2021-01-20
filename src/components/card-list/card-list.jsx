import React from 'react';

import { Card } from '../card/card';

import './card-list.css';

/*
 *  components take in 'props'
 *  'props' is going to be the parameter we get from the functional component
 *
 *  props: one main property of props is children,
 *  if there's no children, it will be null
 *  children is what is passed in between in the component
 *
 */

// responsible for listing out the cards, but not how the cards will look
export const CardList = (props) => (
  <div className="card-list">
    {props.cats.map((cat) => (
      <Card key={cat.id} cat={cat} />
    ))}
  </div>
);
