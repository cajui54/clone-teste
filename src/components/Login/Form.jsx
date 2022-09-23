import Forms from './FormStyled'
import logo from '../../assets/imgs/logo.PNG';
import {Link} from 'react-router-dom';
const Form = () => {
  return (
    <Forms>

      <div className="container-login">
        <h1 className="logo">
          <img src={logo} alt='logo'/>
        </h1>
          <h2>Bem Vindo ao <span>painel</span></h2>

          <div className='containe-input'>
            <input type="email" id='email' placeholder='Digite seu e-mail'/>

            <div className='input-container-password'>
              <input type="password" id='password' placeholder='Digite sua senha'/>
              <i className="fa-regular fa-eye-slash"></i>
            </div>
            
          </div>
          <Link to={'/main'} className='button'>Acessar</Link>
      </div>

      
    </Forms>
  )
}

export default Form
