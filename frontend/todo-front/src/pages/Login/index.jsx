import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../configs/Router';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
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
            alert("ユーザー名かパスワードが違います");
        });
    };

return (
    <>
    <Header />
    <Container maxWidth="xs">
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <form onSubmit={handleSubmit(getJwt)}>
                    <TextField
                        label="ユーザー名"
                        fullWidth
                        margin="normal"
                        variant="standard"
                        {...register('username')}
                    />
                    <TextField
                        label="パスワード"
                        fullWidth
                        margin="normal"
                        type="password"
                        variant="standard"
                        sx={{mb:3}}
                        {...register('password', { required: true })} 
                    />
                    <Button variant="contained" type="submit">ログイン</Button>
                </form>
            </CardContent>
        </Card>
    </Container>
    </>
);
}

export default Login;