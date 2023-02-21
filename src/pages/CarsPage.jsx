import React from 'react';
import ItemCar from '../components/ItemCar';

export default function CarsPage({data}) {

  const Items = data.map(item => (
    <ItemCar key={item.id} item={item}/>
  ))
  return (
    <div>
      {Items}
    </div>
  )
}
