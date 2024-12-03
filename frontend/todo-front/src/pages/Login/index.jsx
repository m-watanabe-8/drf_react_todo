import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({username:"", password:""})
    // const originUrl = new URL('http://localhost:8000/api-v1/account/login/')

    const navigate = useNavigate()

    const setLogin = (target) => {
        target.id === "username" ? setLoginInfo({...loginInfo,username:target.value}) : setLoginInfo({...loginInfo,password:target.value})
    }

    // ログイン
    const login = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api-token-auth/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
        })
        console.log(loginInfo)
        if(response.ok){
            const data = await response.json
            localStorage.setItem('token',JSON.stringify(data.token))
            alert('成功')
            navigate('/loading')
        } else {
            alert('失敗')
        }
    }
    

    return (
        <Container maxWidth="xs">
            <Box mt={3} display="flex" flexDirection="column">
                <TextField 
                label="ユーザー名"
                id="username"
                variant="outlined" 
                value={"" || loginInfo.username}
                onChange={(e)=> setLogin(e.target)}
                />
                <TextField 
                label="パスワード"
                id="password"
                variant="outlined"
                value={"" || loginInfo.password}
                onChange={(e)=> setLogin(e.target)}
                />
                <Button variant="contained" onClick={login}>ログイン</Button>
            </Box>
        </Container>
    )
};
export default Login;