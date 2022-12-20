import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies, News} from '.'

const {Title} = Typography;

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log('stats', globalStats)

  if(isFetching) return 'loading...';
  return (
<>
<Title level={2} className='heading'> Global Crypto Statistics</Title>
<div className='global-stats-container'>
<Row>
    <Col span={6}>  <Statistic className='global-statistic' title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
    <Col span={6}>  <Statistic className='global-statistic' title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
    <Col span={6}>  <Statistic className='global-statistic' title="Total Volume" value={millify(globalStats.total24hVolume)}/></Col>
    <Col span={6}>  <Statistic className='global-statistic' title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    
</Row>
<Col >  <Statistic className='global-statistic' title="Total Cryptocurrencies" value={globalStats.total}/></Col>
</div>

<div className='home-heading-container'>
    <Title level={2} className='home-title'>Top Cryptocurrencies</Title>
  </div>
  <Cryptocurrencies simplified={true}/>
  <Title level={3} className='show-more'><Link className='show-more-link' to='/cryptocurrencies'   onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Show More</Link></Title>
  <div className='home-heading-container'>
    <Title level={2} className='home-title'>News</Title>
  </div>
  <News simplified={true}/>
  <Title level={3} className='show-more'><Link className='show-more-link' to='/news' onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Show More</Link></Title>
</>

    )
}

export default Homepage