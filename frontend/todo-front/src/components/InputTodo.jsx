import { Select, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export const InputTodo = (props) => {
    return(
        <Box sx={{ ml: 3, maxWidth: 300 }} display="flex" flexDirection="column">
            <Typography
            variant="h6" 
            component="div" 
            sx={{ fontFamily: 'monospace', fontWeight: 600, }}>
                新規作成
            </Typography>
            <Select  
            size="small"
            value={props.addTodo.status || ""}
            onChange={props.onChange}
            sx={{ mt: 1, maxWidth: 100 }}
            >
                <MenuItem value="todo">未着手</MenuItem>
                <MenuItem value="doing">着手</MenuItem>
                <MenuItem value="done">完了</MenuItem>
            </Select>
            <TextField 
            label="タイトル"
            id="add-title"
            value={props.addTodo.title || ""}
            onChange={props.onChange}
            variant="outlined" 
            sx={{ mt: 1 }}
            />
            <TextField 
            label="詳細"
            id="add-content"
            value={props.addTodo.content || ""}
            onChange={props.onChange}
            variant="outlined"
            sx={{ mt: 2, mb: 1 }}
            />
            <Button variant="contained" onClick={props.onClick}>追加</Button>
        </Box>
    )
}