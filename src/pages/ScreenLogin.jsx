import React from 'react'
import Login from './styledLogin'
import Form from '../components/Login/Form'
import bgImg from '../assets/imgs/bg-login.PNG'
const ScreenLogin = () => {
  return (
    <Login>
      <Form/>
      <div className='container-bg-img'>
        <img src={bgImg} alt="laptop code hand" />
      </div>
    </Login>
  )
}

export default ScreenLogin
