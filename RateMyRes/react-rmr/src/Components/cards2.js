import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>First Year Residences</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Totem.jpg'
              text='Totem Park'
              label='1st Year Residence'
              path='/Residences'
            />
            <CardItem
              src='/images/Vanier.jpg'
              text='Vanier'
              label='1st Year Residence'
              path='/Residences'
            />
            <CardItem
              src='images/Orchard.png'
              text='Orchard Commons'
              label='1st Year Residence'
              path='/Residences'
            />
          </ul>
        </div>
      </div>
      <h1>Upper Year Residences</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text=''
              label='Upper Year Residence'
              path='/Residences'
            />
            <CardItem
              src=''
              text=''
              label='Upper Year Residence'
              path='/Residences'
            />
            <CardItem
              src=''
              text=''
              label='Upper Year Residence'
              path='/Residences'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;