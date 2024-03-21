import React from 'react';
import { Layout } from 'antd';
import './Content.scss';
import { Game } from './Game/Game.jsx';

const contentStyle = {
    // textAlign: 'center',
    // color: '#fff',
    // backgroundColor: '#0958d9',
    flex: 1, /* Это чтобы основное содержимое занимало всё доступное пространство */
    overflowY: 'auto', /* Это чтобы появлялся скроллбар только в основном содержимом */
    marginLeft: '200px',
};


export default function Content({ gamesPopularity, games, nextPage, prevPage}) {

  return (
    <Layout.Content style={contentStyle}>
      <div className="wrapper">
        <div className="wrapper__games">
          {
            games.map((game) => (
              <Game 
                key={game.id} 
                name={game.name}
                image={game.background_image}
                genres={game.genres}
                release_date={game.released}
                />
            ))
          }
        </div>

        <div className="wrapper__pagination">
          <button onClick={() => prevPage()}>prev</button>
          <button onClick={() => nextPage()}>next</button>
        </div>
      </div>
    </Layout.Content>
  )
}
