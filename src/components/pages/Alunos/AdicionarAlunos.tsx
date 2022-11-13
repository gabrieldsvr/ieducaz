import React from 'react';
import {Container, Paper, Typography} from "@mui/material";
import {FormAluno} from '../../organisms/Forms/FormAluno/FormAluno';
const AdicionarAlunos = () => {
    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                   Novo aluno
                </Typography>
                <Paper elevation={12}>
                    <FormAluno/>
                </Paper>
            </Container>
        </>
    );
}
export default AdicionarAlunos;