import React from 'react';
import './index.css';

function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Haricot Realm</h3>
                <span className='loginDesc'>Commencez à partager</span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Email' className='loginInput'></input>
                    <input placeholder='Mot de passe' className='loginInput'></input>
                    <button className='loginBtn'>Connexion</button>
                    <span className='loginForgot'>Mot de passe oublié</span>
                    <button className='loginRegisterBtn'>S'enregistrer</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login