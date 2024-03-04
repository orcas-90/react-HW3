import React from 'react';

import { cnCard } from './Card.classname';

import type { FC } from 'react';

import './Card.css';

type CardProps = {
  tittle: string;
  starImages: string[];
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
  starImages,
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
      <h1 className={cnCard('Tittle')}>{tittle}</h1>

      <div className={cnCard('Status')}>
        <div>
          {starImages.map((starImage) => (
            <img className={cnCard('Star')} src={starImage}></img>
          ))}
          <span>{rating}</span>
        </div>
        <p>{review}</p>
        {numberBuy ? <p>{numberBuy}</p> : undefined}
      </div>

      {cardImages.map((cardImage) => (
        <img src={cardImage} className={cnCard('Main_Images')}></img>
      ))}

      <div className={cnCard('Swap')}>
        <img src={swap}></img>
      </div>

      <p className={cnCard('Color_Text')}>
        <span className={cnCard('Color')}>{color}</span> {colorText}
      </p>

      <div className={cnCard('Choise')}>
        {choiseColors.map((choiseColor) => (
          <div
            className={cnCard('Choise-Color')}
            style={{ backgroundColor: choiseColor }}
          ></div>
        ))}
      </div>

      <div className={cnCard('Size')}>
        <span className={cnCard('Color')}>{color}</span>
        <span className={cnCard('Color-Size_String')}>{sizeString}</span>
        <span className={cnCard('Color-Size')}>{sizeNumber}</span>
      </div>

      <div className={cnCard('Button-Cont')}>
        <button className={cnCard('Button')}>{'В корзину'}</button>
        <button className={cnCard('Button-Buy')}>
          {'Купить сейчас'} <span className={cnCard('Cost')}>{cost}</span>
        </button>
      </div>
      <p className={cnCard('Delivery')}>
        {'Доставка'} <span className={cnCard('Date')}>{delivery}</span>
      </p>
    </div>
  );
};

export { Card };
