import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Breadcrumb } from 'antd';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/CryptoCaveLogoV3.png';

const Navbar = () => {
  let path = window.location.pathname
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
     <nav className='nav'>
          
          
        <Link to='/'>
          <Avatar shape='square' src={icon} size={128}/>
         <span className='site-title'>
         Crypto Cave
         </span>
        </Link>
        <ul>
            <CustomLink className='navLink' to='/'>
            <HomeOutlined className="menu-icon"/>
              Home
            </CustomLink>
            
            <CustomLink className='navLink' to='/cryptocurrencies'>
            <FundOutlined className="menu-icon"/>
              Cryptos
              </CustomLink>
           
            <CustomLink className='navLink' to='/news'>
            <BulbOutlined className="menu-icon"/>
              News
              </CustomLink>
            
        </ul>
    </nav>
  </>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar;