import React from 'react';
import {Container, Paper, Typography} from "@mui/material";
import {FormCurso} from "../../organisms/Forms/FormCurso/FormCurso";

export const AdicionarCursos = () => {
    return (
        <>
            <Container>
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