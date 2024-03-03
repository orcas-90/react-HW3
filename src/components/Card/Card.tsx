import React from 'react';

import { cnCard } from './Card.classname';

import type { FC } from 'react';

import './Card.css';

type CardProps = {
  tittle: string;
  starimages: string[];
  rating: number;
  review: number | string;
  numberBuy?: number | string;
  cardImages: string[];
  swap: string;
  colorText: string;
  color: string;
  choiseColors: string[];
  sizeString: string;
  sizeNumber: number | string;
  cost: number | string;
  delivery: number | string;
};

const Card: FC<CardProps> = ({
  tittle,
  starimages,
  rating,
  review,
  numberBuy,
  cardImages,
  swap,
  colorText,
  color,
  choiseColors,
  sizeString,
  sizeNumber,
  cost,
  delivery,
}) => {
  return (
    <div className={cnCard()}>
      <h1 className={cnCard('tittle')}>{tittle}</h1>

      <div className={cnCard('status')}>
        <div>
          {starimages.map((starimage) => (
            <img className={cnCard('star')} src={starimage}></img>
          ))}
          <span>{rating}</span>
        </div>
        <p>{review}</p>
        <p className={cnCard({ hidden: !numberBuy })}>{numberBuy}</p>
      </div>

      {cardImages.map((cardImage) => (
        <img src={cardImage} className={cnCard('main_images')}></img>
      ))}

      <div className={cnCard('swap')}>
        <img src={swap}></img>
      </div>

      <p className={cnCard('color_Text')}>
        <span className={cnCard('color')}>{color}</span> {colorText}
      </p>

      <div className={cnCard('choise')}>
        {choiseColors.map((choiseColor) => (
          <div
            className={cnCard('choise-color')}
            style={{ backgroundColor: choiseColor }}
          ></div>
        ))}
      </div>

      <div className={cnCard('size')}>
        <span className={cnCard('color')}>{color}</span>
        <span className={cnCard('color-size_string')}>{sizeString}</span>
        <span className={cnCard('color-size')}>{sizeNumber}</span>
      </div>

      <div className={cnCard('button-cont')}>
        <button className={cnCard('button')}>{'В корзину'}</button>
        <button className={cnCard('button-buy')}>
          {'Купить сейчас'} <span className={cnCard('cost')}>{cost}</span>
        </button>
      </div>
      <p className={cnCard('delivery')}>
        {'Доставка'} <span className={cnCard('date')}>{delivery}</span>
      </p>
    </div>
  );
};

export { Card };
