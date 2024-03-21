import { Layout, Flex } from 'antd';

import './App.css';

import Header from './components/Header/Header.jsx';
import Sider from './components/Sider/Sider.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";

const APIKEY = 'f158215f22d444b68676979dcc5fb497';

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  height: '100%',
};

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "30px",
  marginBottom: "30px",
  borderColor: "red",
};

const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4'];

const categories = ['Action', 'RPG', 'Shooter', 'Adventure', 'Indie', 'Puzzle', 'Platformer', 'Sports', 'Racing', 'Massively Multiplayer', 'Arcade', 'Simulation', 'Strategy', 'Fighting', 'Casual',]

function App() {
  
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const platforms = {
    method: 'GET',
    url: `https://api.rawg.io/api/platforms?key=${APIKEY}`,
    params: {
      page_size: 4,
    }
  };
  
  const gamesPopularity = {
    method: 'GET',
    url: `https://api.rawg.io/api/games?key=${APIKEY}`,
    params: {
      page_size: 20,
      page: currentPage,
    }
  }

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.request(gamesPopularity).then(function (responce) {
      setIsLoading(true);
      setGames(responce.data.results);
      setIsLoading(false);
    }).catch(function (error) {
      console.log(error);
    })
  }, [currentPage]);

  useEffect(() => {
    axios.request(platforms).then(function (responce) {
      console.log(responce.data.results)
    }).catch(function (error) {
      console.log(error);
    })
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
    <Layout style={layoutStyle}>
      <Header />
      <Layout>
        <Sider />

        {!isLoading ? (
                  <Content
                  games={games}
                  gamesPopularity={gamesPopularity} 
                  currentPage={currentPage}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  />
          ) : <PacmanLoader color="yellow" cssOverride={override} size={100} />}
      </Layout>
      <Footer />
    </Layout>
    </>
  )
}

export default App;
