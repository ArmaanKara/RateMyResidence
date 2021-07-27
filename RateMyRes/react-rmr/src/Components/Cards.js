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
            <CardItems
              src='images/Orchard.png'
              text='Orchard Commons'
              label='1st Year Residence'
              path='/Residences'
            />
          </ul>
          <br/>
          <br/>
          <h1>Upper Year Residences</h1>
          <br/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;