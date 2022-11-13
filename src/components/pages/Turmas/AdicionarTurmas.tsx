import React from 'react';
import {Container, Paper, Typography} from "@mui/material";
import {FormTurma} from "../../organisms/Forms/FormTurma/FormTurma";

const AdicionarAlunos = () => {
    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Nova turma
                </Typography>
                <Paper elevation={12}>
                    <FormTurma/>
                </Paper>
                <Paper elevation={12} sx={{my: 5}}>
                    {/*<FormTurmaTeste/>*/}
                </Paper>
            </Container>
        </>
    );
}
export default AdicionarAlunos;