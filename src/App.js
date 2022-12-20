import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News} from './components'
import './App.css'
const App = () => {
  return (
    <div className='app'>
        
        <div className='navbar'>
        <NavBar />
        </div>
        <div className='main'>
        <Layout>
        <div className='routes'>
        <Routes> 
            <Route exact path='/' element={<Homepage />} /> 
                
            {/* <Route exact path='/exchanges' element={<Exchanges />} />  */}
                
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} /> 
                
            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} /> 
                
            <Route exact path='/news' element={<News />} /> 
               
        </Routes>
        </div>
        </Layout>
    <div className='footer' >
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            <h1>Crypto Cave</h1>
        </Typography.Title>
        <Space>
            <Link className='footer-link' to='/' onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Home</Link>
            <Link className='footer-link' to='/cryptocurrencies'onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Cryptocurrencies</Link>
            <Link className='footer-link' to='/News'onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>News</Link>
        </Space>
    </div>
    </div>
    </div>
  )
}

export default App