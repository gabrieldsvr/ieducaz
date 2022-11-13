import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import * as React from "react";
import {useState} from "react";
import {LoadingSpinner} from "../../atoms/LoadingSpinner/LoadingSpinner";
import {Simulate} from "react-dom/test-utils";

type Props = {
    handleClose: () => void,
    handleConfirm: () => void,
    state: boolean,
    title: string,
    text: string,
    textConfirm?: string,
    textCancel?: string,

}
export const AlertDialog = ({
                                handleClose,
                                handleConfirm,
                                state,
                                title,
                                text,
                                textConfirm = 'Confirmar',
                                textCancel = 'Cancelar'
                            }: Props) => {

    const [loading, setLoading] = useState(false);

    return (
        <div>

            <Dialog
                open={state}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                {loading ? <LoadingSpinner/> :
                    <>
                        <DialogTitle id="alert-dialog-title">
                            {title}
                        </DialogTitle>
                        <DialogContent>

                            <DialogContentText id="alert-dialog-description">
                                {text}
                            </DialogContentText>
                        </DialogContent>
                    </>
                }

                <DialogActions>
                    <Button onClick={handleClose} variant="text" disabled={loading}>{textCancel}</Button>
                    <Button onClick={async () => {
                        setLoading(true)
                        await handleConfirm()
                        await setLoading(false)

                    }} autoFocus variant="contained" disabled={loading}>
                        {textConfirm}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
