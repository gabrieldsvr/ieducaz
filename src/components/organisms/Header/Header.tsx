import {Button} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {ButtonMenu} from "../../molecules/ButtonMenu/ButtonMenu";
import Typography from "@mui/material/Typography";
import {MenuLateral} from "../../molecules/MenuLateral";

type Props = {}


export const Header = ({...props}: Props) => {


    const [menuLateral, setMenuLateral] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setMenuLateral(!menuLateral);
    };


    return (
        <>
            {/*<TemporaryDrawer/>*/}
            <AppBar position="static" sx={{mb:5}}>

                <Toolbar>
                    <ButtonMenu click={toggleDrawer}/>
                    <MenuLateral click={toggleDrawer} state={menuLateral}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Iedu
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <br/>
        </>
    );
}
