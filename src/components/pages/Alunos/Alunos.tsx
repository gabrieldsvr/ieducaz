import React, {useEffect, useState} from 'react';
import {Container, Paper, Typography} from "@mui/material";
import TabelaAlunos from "../../organisms/Tabelas/TabelaAlunos/TabelaAlunos";
import {AlunoService} from "../../../services/AlunoService";



const Alunos = () => {

    const [alunos, setAlunos] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    const handleLoadAlunos =  async () => {
        setLoading(true);
        let al = await AlunoService.index();
         setAlunos(al.data);
        setLoading(false);
    };

useEffect(() => {
    handleLoadAlunos();
}, []);

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Lista de alunos
                </Typography>
                <Paper elevation={12} sx={{overflow: 'hidden'}}>
                    <TabelaAlunos listAlunos={alunos} loading={loading}/>
                </Paper>
            </Container>
        </>
    );
}
export default Alunos;