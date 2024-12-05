import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from "../../components/Header";

const Signup = (data) => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, errors } = useForm();

    const createUser = async (data) =>{
        // JWTトークンを取得
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
        <Box mt={3}>
            <h4>新規登録</h4>
            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="username">UserName：</label>
                <input className='form-control' {...register('username')} />
                <label htmlFor="email">Email</label>
                <input className='form-control' {...register('email')} />
                <label htmlFor="password">PassWord：</label>
                <input className='form-control' type="password" {...register('password', { required: true })} />
                <input className='btn btn-secondary' type="submit" value="新規登録" />
            </form>
        </Box>
    </Container>
    </>
);
}

export default Signup;