import React from 'react'

import '../Content.scss';

export const Game = ({ name, image, genres, release_date, developer}) => {
  return (
    <div className="game">
      <div className="wrapper">
          <div className="wrapper__image">
            <img src={image} alt="img" className="gameBackground"/>
          </div>
          <div className="wrapper__title">
            Название {name}
          </div>
          <div className="wrapper__info">
            <div className="info__genre">
              {
                genres.map((genre) => (
                  <p>{genre.name}</p>
                ))
              }
            </div>
            <div className="info__release">
              Дата релиза: {release_date}
            </div>
          </div>
      </div>
    </div>
  )
}
