import React from 'react';
import Vector from './Vector.png';
import Aid from './Aid.png';
import swap from './swap.png';

import { Card } from './components/Card/Card';

const CardsData = [
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
      {CardsData.map((CardData) => (
        <Card
          tittle={CardData.tittle}
          starimages={CardData.starimages}
          rating={CardData.rating}
          review={CardData.review + ' отзыва'}
          numberBuy={CardData.numberBuy + '  купили'}
          cardImages={CardData.cardImages}
          swap={CardData.swap}
          color={'Цвет: '}
          colorText={CardData.colorText}
          choiseColors={CardData.choiseColors}
          sizeString={CardData.sizeString}
          sizeNumber={CardData.sizeNumber}
          cost={CardData.cost + ' р'}
          delivery={CardData.delivery}
        />
      ))}
    </div>
  );
};

export { App };
