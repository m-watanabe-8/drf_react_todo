import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const DeleteDialog = (props) => {
    return(
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle>{"削除しますか？"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    削除した場合、元には戻せません。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>キャンセル</Button>
                <Button onClick={props.deleteTodo}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}