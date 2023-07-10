import React from 'react';
import Banner from '../Banner/Banner';
import request from '../../../src/Request'
import Row from '../Row/Row';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Row rowId='1' title = 'Upcoming Movie' fetchURL = {request.requestUpcoming}></Row>
      <Row rowId='2' title = 'popular Movie' fetchURL = {request.requestPopular}></Row>
      <Row rowId='3' title = 'Trending Movie' fetchURL = {request.requestTrending}></Row>
      <Row rowId='4' title = 'TopRated Movie' fetchURL = {request.requestHorror}></Row>
      <Row rowId='5' title = 'Horror Movie' fetchURL = {request.requestHorror}></Row>
    </div>
  );
};

export default Home;