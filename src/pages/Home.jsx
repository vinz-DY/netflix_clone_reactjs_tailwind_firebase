import React from 'react'
import MainNet from '../components/MainNet'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <MainNet />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestsPopular} />
      <Row title="Trending" fetchURL={requests.requestsTrending} />
      <Row title="Top Rated" fetchURL={requests.requestsTopRated} />
      <Row title="Horror" fetchURL={requests.requestsHorror} />
    </>
  );
}

export default Home