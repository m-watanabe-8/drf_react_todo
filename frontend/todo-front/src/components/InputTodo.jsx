import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export const InputTodo = (props) => {
    return(
        <Grid size={4}>
            <Box mt={3} mb={3} sx={{ m: 1, maxWidth: 300 }} display="flex" flexDirection="column">
                <Select  
                size="small"
                value={props.addTodo.status || ""}
                onChange={props.onChange}
                sx={{ m: 1, maxWidth: 100 }}
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
                />
                <TextField 
                label="詳細"
                id="add-content"
                value={props.addTodo.content || ""}
                onChange={props.onChange}
                variant="outlined"
                />
                <Button variant="contained" onClick={props.onClick}>追加</Button>
            </Box>
        </Grid>
    )

}