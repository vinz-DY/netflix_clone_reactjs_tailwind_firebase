import React from 'react'
import MainNet from '../components/MainNet'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <MainNet />
      <Row rowID='1' title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetchURL={requests.requestsPopular} />
      <Row rowID='3' title="Trending" fetchURL={requests.requestsTrending} />
      <Row rowID='4' title="Top Rated" fetchURL={requests.requestsTopRated} />
      <Row rowID='5' title="Horror" fetchURL={requests.requestsHorror} />
    </>
  );
}

export default Home