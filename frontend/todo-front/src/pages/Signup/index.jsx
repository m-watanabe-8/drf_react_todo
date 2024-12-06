import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Header } from "../../components/Header";

const Signup = (data) => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, errors } = useForm();

    const createUser = async (data) =>{
        // 新規ユーザーを作成
        await axios.post('http://localhost:8000/api/v1/user/create/',data,)
        .then(function (response) {
            navigate('/login/');
        })
        .catch(err => {
            alert("失敗しました");
        });
    };

return (
    <>
    <Header />
    <Container maxWidth="xs">
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <form onSubmit={handleSubmit(createUser)}>
                    <TextField
                        label="ユーザー名"
                        fullWidth
                        margin="normal"
                        variant="standard"
                        {...register('username')}
                    />
                    <TextField
                        label="メールアドレス"
                        fullWidth
                        margin="normal"
                        variant="standard"
                        {...register('email')}
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
                    <Button variant="contained" type="submit">新規登録</Button>
                </form>
            </CardContent>
        </Card>
    </Container>
    </>
);
}

export default Signup;