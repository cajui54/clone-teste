import React from 'react';
import AsideNav from './styledAside';
import logo from '../../assets/imgs/logo.PNG'
import Navegation from './Navegation';

const Aside = () => {
  return (
    <AsideNav>
      <div className='container-logo'>
        <img src={logo} alt="logo image" />
      </div>
      <Navegation/>
    </AsideNav>
  )
}

export default Aside
