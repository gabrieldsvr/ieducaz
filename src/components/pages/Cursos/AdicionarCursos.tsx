import React from 'react';
import {Breadcrumbs, Container, Paper, Typography} from "@mui/material";
import {FormCurso} from "../../organisms/Forms/FormCurso/FormCurso";
import {Link} from "react-router-dom";

export const AdicionarCursos = () => {
    return (
        <>
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link  to="/" className="item-menu" color={'primary'}>
                        <Typography color="text.primary">Dashboard</Typography>
                    </Link>
                    <Link  to="/cursos" className="item-menu" color={'primary'}>
                        <Typography color="text.primary">Cursos</Typography>
                    </Link>
                    <Typography color="text.primary">Novo Curso</Typography>
                </Breadcrumbs>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Novo curso
                </Typography>
                <Paper elevation={12}>
                    <FormCurso/>
                </Paper>
            </Container>
        </>
    );
};