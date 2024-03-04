import React from 'react';
import Vector from './Vector.png';
import Aid from './Aid.png';
import swap from './swap.png';

import { Card } from './components/Card/Card';

const cardsData = [
  {
    tittle:
      'Мини Портативная Медицинская сумка Аптечка медицинские аварийные наборы Органайзер уличная домашняя медицина сумка для лекарств',
    starimages: [Vector, Vector, Vector, Vector, Vector],
    rating: 0,
    review: 0,
    numberBuy: 666,
    cardImages: [Aid],
    swap: swap,
    colorText: 'Бордовый шниц',
    choiseColors: ['#900018', '#176800', '#3384E2', '#D36527'],
    sizeString: 'S',
    sizeNumber: '35/37 cm',
    cost: 1450,
    delivery: '15-18 февраля',
  },
];

const App = () => {
  return (
    <div className="App">
      {cardsData.map((cardData) => (
        <Card
          tittle={cardData.tittle}
          starImages={cardData.starimages}
          rating={cardData.rating}
          review={cardData.review + ' отзыва'}
         // numberBuy={cardData.numberBuy + '  купили'}
          cardImages={cardData.cardImages}
          swap={cardData.swap}
          color={'Цвет: '}
          colorText={cardData.colorText}
          choiseColors={cardData.choiseColors}
          sizeString={cardData.sizeString}
          sizeNumber={cardData.sizeNumber}
          cost={cardData.cost + ' р'}
          delivery={cardData.delivery}
        />
      ))}
    </div>
  );
};

export { App };
