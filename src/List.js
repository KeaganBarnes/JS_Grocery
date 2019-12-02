import React from 'react';
import Grocery from './Grocery';

const List = ({ items, name}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Grocery key={item.id} id={item.name} name={item.name} complete={item.complete} /> )}
    </ul>
  </div>
)

export default List;