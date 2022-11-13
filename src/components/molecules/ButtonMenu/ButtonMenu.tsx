import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import {ReactEventHandler} from "react";

type Props = {
    size?: 'small' | 'medium' | 'large';
    click: (open: boolean) => ReactEventHandler;
}


export const ButtonMenu = ({size = 'small',click, ...props}: Props) => {
    return (
        <IconButton
            onClick={click( true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
        </IconButton>
    );
}
