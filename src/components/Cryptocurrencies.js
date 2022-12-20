import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {


  const count = simplified ? 12 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {

const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

setCryptos(filterData);
}, [cryptosList, searchTerm]);


  if(isFetching) return 'loading...';
  console.log('cryptos', cryptos)
  return (
    <>
    {!simplified&&(
      <div className='search-bar-crypto'> 
      <Input placeholder='search crypto' onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    )}
   
     <Row gutter={[32, 32]} className='crypto-container'>
       {cryptos?.map((currency) => (
         <Col xs={24} sm={12} lg={6} className='cryptos-card' key={currency.uuid}>
           <Link to={`/crypto/${currency.uuid}`}>
             <Card 
             className='card'
             title={`${currency.rank}. ${currency.name}`} 
             extra={<img className='crypto-image' src={currency.iconUrl} alt='none found'/>} 
             hoverable
             >
               <p>Price: {millify(currency.price)}</p>
               <p>Market Cap: {millify(currency.marketCap)}</p>
               <p>Daily Change: {millify(currency.change)}%</p>

               </Card>
           </Link>
         </Col>
       ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies