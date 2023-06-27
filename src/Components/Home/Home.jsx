import React from 'react';
import Banner from '../Banner/Banner';
import request from '../../../src/Request'
import Row from '../Row/Row';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Row title = 'Upcoming Movie' fetchURL = {request.requestUpcoming}></Row>
      <Row title = 'popular Movie' fetchURL = {request.requestPopular}></Row>
      <Row title = 'Trending Movie' fetchURL = {request.requestTrending}></Row>
      <Row title = 'TopRated Movie' fetchURL = {request.requestHorror}></Row>
      <Row title = 'Horror Movie' fetchURL = {request.requestHorror}></Row>
    </div>
  );
};

export default Home;