import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../configs/Router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from "../../components/Header";

const Login = () => {
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies();
    const { register, handleSubmit, watch, errors } = useForm();

    const getJwt = async (data) =>{
        // JWTトークンを取得
        await axios.post(`${apiURL}auth/jwt/create/`,
        {
            username:data.username,
            password:data.password,
        },
        )
        .then(function (response) {
            // useCookiesを用いて取得したトークンをCookieに保存
            setCookie('accesstoken', response.data.access, { path: '/' }, { httpOnly: true });
            setCookie('refreshtoken', response.data.refresh, { path: '/' }, { httpOnly: true });
            navigate('/todo/');      // 指定したパスに遷移
        })
        .catch(err => {
            alert("UserNameかPasswordが違います");
        });
    };

return (
    <>
    <Header />
    <Container maxWidth="xs">
        <Box mt={3}>
            <form onSubmit={handleSubmit(getJwt)}>
                <label htmlFor="username">UserName：</label>
                <input className='form-control' {...register('username')} />
                <label htmlFor="password">PassWord：</label>
                <input className='form-control' type="password" {...register('password', { required: true })} />
                <input className='btn btn-primary' type="submit" value="ログイン" />
            </form>
        </Box>
    </Container>
    </>
);
}

export default Login;