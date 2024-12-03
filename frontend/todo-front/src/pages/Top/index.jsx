import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { DeleteDialog } from "../../components/DeleteDialog";
import { InputTodo } from "../../components/InputTodo";
import { createTodoList, deleteTodoList, getTodoList, updateTodoList } from './TodoApi';

const Top = () => {

    const [todoList,setTodoList] = useState([])
    const [addTodo,setAddTodo] = useState([])
    const [delTodoId,setDelTodoId] = useState("")
    const [open, setOpen] = useState(false);

    // TODO一覧の取得
    const getTodo = async () => {
        const list = await getTodoList();
        if(list){
            setTodoList(list);
        }
    }

    // 追加するTODOを作成
    const setNewAddTodo = (target, todoId) => {
        if(target.id == null){
            setAddTodo({ ...addTodo, status:target.value })
        }
        else if(target.id.startsWith("add-title")){
            setAddTodo({ ...addTodo, title:target.value })
        }
        else if(target.id.startsWith("add-content")){
            setAddTodo({ ...addTodo, content:target.value })
        }
    }

    // 新規作成処理
    const createTodo = async () => {
        if(addTodo.status === "" || addTodo.title === ""){
            return
        }

        await createTodoList(addTodo)
        setAddTodo([])
        // 一覧の更新(idを取得するため)
        getTodo()
    }
    
    // 更新処理
    const changeTodo = async (target,todoId) => {
        const updateValue = target.value
        const copyTodoList = todoList.map((todo) => ({...todo}))
        let newTodoList = []
        console.log(target)

        // イベント対象によって分岐
        if(target.id == null){
            newTodoList = copyTodoList.map((todo) => todo.id === todoId ? { ...todo, status:updateValue } : todo)
        }
        else if(target.id.startsWith("todo-title")){
            newTodoList = copyTodoList.map((todo) => todo.id === todoId ? { ...todo, title:updateValue } : todo)
        }
        else if(target.id.startsWith("todo-content")){
            newTodoList = copyTodoList.map((todo) => todo.id === todoId ? { ...todo, content:updateValue } : todo)
        }
        
        const updateTodo = newTodoList.find((todo) => todo.id === todoId)
        await updateTodoList(todoId,updateTodo)
        setTodoList(newTodoList)
    }

    // 削除ダイアログ
    const handleClickOpen = (todoId) => {
        setDelTodoId(todoId)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // 削除処理
    const deleteTodo = async () => {
        await deleteTodoList(delTodoId)
        setTodoList(todoList.filter((todo) => todo.id !== delTodoId))
        setDelTodoId("")
        handleClose()
    }

    // レンダリング時に一覧を取得
    useEffect(() => {
        getTodo()
    }, [])


    return (
        <Grid container spacing={2}>
            <Grid display="flex" justifyContent="center" size={8}>
                <Grid size={8}>
                    {todoList.length > 0 && todoList.map((todo,index) => {
                        return(
                            <Box mb={3} key={index}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Box display="flex" flexDirection="column">
                                            <Select 
                                            value={todo.status}
                                            onChange={e => changeTodo(e.target,todo.id)}
                                            sx={{ m: 1, maxWidth: 100 }} 
                                            size="small"
                                            >
                                                <MenuItem value='todo'>未着手</MenuItem>
                                                <MenuItem value='doing'>着手</MenuItem>
                                                <MenuItem value='done'>完了</MenuItem>
                                            </Select>
                                            <TextField 
                                            label="タイトル"
                                            variant="outlined" 
                                            id={"todo-title" + todo.id}
                                            value={todo.title} 
                                            onChange={e => changeTodo(e.target,todo.id)}
                                            />
                                            <TextField 
                                            label="詳細"
                                            variant="outlined" 
                                            id={"todo-content" + todo.id}
                                            value={todo.content} 
                                            onChange={e => changeTodo(e.target,todo.id)}
                                            />
                                        </Box>
                                        <CardActions>
                                            <Button variant="outlined" onClick={() => handleClickOpen(todo.id)}>削除</Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Box>
                        )
                    })}
                </Grid>
                <InputTodo 
                    addTodo={addTodo}
                    onChange={e => setNewAddTodo(e.target)}
                    onClick={createTodo}
                />
                <DeleteDialog
                    open={open}
                    handleClose={handleClose}
                    deleteTodo={() => deleteTodo()}
                />
            </Grid>
        </Grid>
    )
};
export default Top;