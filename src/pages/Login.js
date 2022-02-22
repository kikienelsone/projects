import React, { useContext } from 'react';
import MyButton from '../component/button/button';
import MyInp from '../component/input/MyInp';
import { AuthContext } from '../context';

const Login = () => {


    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}  >

                <MyInp type="text" placeholder="Введите логин"></MyInp>
                <MyInp type="password" placeholder="Введите пароль"></MyInp>
                <MyButton >Войти</MyButton>

            </form>

        </div>
    );
};

export default Login;