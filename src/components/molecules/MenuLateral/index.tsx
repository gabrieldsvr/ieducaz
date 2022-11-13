import * as React from "react";
import {ReactEventHandler} from "react";


import './styles.css'

import Drawer from '@mui/material/Drawer';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {Collapse} from "@mui/material";
import {ExpandLess, ExpandMore, FormatListBulletedRounded} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import SchoolIcon from '@mui/icons-material/School';

type Props = {
    click: (open: boolean) => ReactEventHandler;
    state: boolean;
}


export const MenuLateral = ({click, state, ...props}: Props) => {

    const [collapseAlunos, setCollapseAlunos] = React.useState(false);
    const [collapseTurmas, setCollapseTurmas] = React.useState(false);
    const [collapseCursos, setCollapseCursos] = React.useState(false);

    const handleClickCollapseAlunos = () => {
        setCollapseAlunos(!collapseAlunos);
    };

    const handleClickCollapseTurmas = () => {
        setCollapseTurmas(!collapseTurmas);
    };

    const handleClickCollapseCursos = () => {
        setCollapseCursos(!collapseCursos);
    };

    return (
        <Drawer
            anchor={'left'}
            open={state}
            onClose={click(false)}>
            <Box
                sx={{width: 250, mt: 5}}
                role="presentation"
                className="ma">
                <List onClick={click(false)}
                      onKeyDown={click(false)}>
                    <Link to="/home" className="item-menu">
                        <ListItem key='home' disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='home'/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>

                <Divider/>

                <List>
                    <ListItemButton className="div-collapse"
                                    onClick={handleClickCollapseAlunos}>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Alunos"/>
                        {collapseAlunos ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={collapseAlunos} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding
                              onClick={click(false)}
                              onKeyDown={click(false)}>
                            <Link to="/alunos/adicionar" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <AddCircleOutlineRoundedIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Adicionar"/>
                                </ListItemButton>
                            </Link>
                            <Link to="/alunos" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <FormatListBulletedRounded/>
                                    </ListItemIcon>
                                    <ListItemText primary="Listar"/>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                </List>

                <Divider/>

                <List>
                    <ListItemButton className="div-collapse" onClick={handleClickCollapseTurmas} disableRipple>
                        <ListItemIcon>
                            <LocalLibraryRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Turmas"/>
                        {collapseTurmas ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={collapseTurmas} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding
                              onClick={click(false)}
                              onKeyDown={click(false)}
                        >
                            <Link to="/turmas/adicionar" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <AddCircleOutlineRoundedIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Adicionar"/>
                                </ListItemButton>
                            </Link>
                            <Link to="/turmas" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <FormatListBulletedRounded/>
                                    </ListItemIcon>
                                    <ListItemText primary="Listar"/>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                </List>

                <Divider/>

                <List>
                    <ListItemButton className="div-collapse" onClick={handleClickCollapseCursos} disableRipple>
                        <ListItemIcon>
                            <SchoolIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Cursos"/>
                        {collapseCursos ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={collapseCursos} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding
                              onClick={click(false)}
                              onKeyDown={click(false)} >

                            <Link to="/cursos/adicionar" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <AddCircleOutlineRoundedIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Adicionar"/>
                                </ListItemButton>
                            </Link>
                            <Link to="/cursos" className="item-menu">
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <FormatListBulletedRounded/>
                                    </ListItemIcon>
                                    <ListItemText primary="Listar"/>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                </List>

                <Divider/>
            </Box>
        </Drawer>
    );
}
