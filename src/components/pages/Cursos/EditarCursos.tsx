import React, {useEffect, useState} from 'react';
import {Container, Paper, Typography} from "@mui/material";
import {FormCurso} from "../../organisms/Forms/FormCurso/FormCurso";
import {CursoService} from "../../../services/CursoService";
import {useParams} from "react-router-dom";
import {LoadingSpinner} from "../../atoms/LoadingSpinner/LoadingSpinner";

export const EditarCursos = () => {

    const params = useParams();


    interface Curso {
        nome: string;
        nivel: string;
        id: string;
    }

    const [curso, setCurso] = useState<Curso>({'nome': '','nivel': '','id': ''});
    const [loading, setLoading] = useState(true);

    const handleLoadCursos = async () => {
        if (params.curso !== undefined) {
            setLoading(true);
            let cur = await CursoService.show(params.curso);
            await setCurso(cur.data);
            await setLoading(false);
        }

    };


    useEffect(() => {
        handleLoadCursos().then(r => {return r});
    }, []);

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom sx={{color: "#000000BE"}}>
                    Editar curso
                </Typography>

                <Paper elevation={12}>
                    {loading ? <LoadingSpinner/> :  <FormCurso curso={curso} edit={true}/>}
                </Paper>
            </Container>
        </>
    );
};