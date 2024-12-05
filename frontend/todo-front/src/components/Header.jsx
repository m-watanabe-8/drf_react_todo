import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useCookies } from 'react-cookie';
import { Logout } from './Logout';

export const Header = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const token = cookies.accesstoken

    return (
        <Box sx={{ flexGrow: 1 }} mb={4}>
            <AppBar position="static">
                <Toolbar>
                <Typography 
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, }}>
                    TODO
                </Typography>
                {
                    token === void 0 ? (
                        <>
                            <Button color="inherit" href="/login/">ログイン</Button>
                            <Button color="inherit" href="/signup/">新規登録</Button>
                        </>
                    ) : (
                        <Logout />
                    )
                }
                </Toolbar>
            </AppBar>
        </Box>
    );
}