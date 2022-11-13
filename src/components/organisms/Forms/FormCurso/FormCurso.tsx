import * as React from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FormInputSelect} from "../../../atoms/FormHook/FormInputSelect/FormInputSelect";
import {FormInputText} from "../../../atoms/FormHook/FormInputText/FormInputText";
import {useForm} from "react-hook-form";
import {CursoService} from "../../../../services/CursoService";
import {useNavigate} from "react-router-dom";

interface Curso {
    nome: string;
    nivel: string;
    id: string;
}

type Props = {
    curso?: Curso;
    edit?: boolean;
}
export const FormCurso = ({curso = {'nome': '', 'nivel': '', 'id': ''},edit=false}: Props) => {

    const {handleSubmit, control} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        console.log(data)
        if (edit){
            let response = await CursoService.update(curso.id,data);
            if (response.status == 200) {
                navigate('/cursos');
            }
        }else{
            let response = await CursoService.store(data);
            if (response.status == 201) {
                navigate('/cursos');
            }
        }

    };

    const itensSelectNiveis = Array(
        {"label": "1", "value": "1"},
        {"label": "2", "value": "2"},
        {"label": "3", "value": "3"},
        {"label": "4", "value": "4"},
        {"label": "5", "value": "5"},
        {"label": "6", "value": "6"},
        {"label": "7", "value": "7"},
        {"label": "8", "value": "8"},
        {"label": "9", "value": "9"},
        {"label": "10", "value": "10"},
        {"label": "11", "value": "11"},
        {"label": "12", "value": "12"},
    );


    return (
        <Container sx={{p: 5}}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FormInputText name={'nome'}
                                           label={'Nome do curso'}
                                           defaultValue={curso.nome}
                                           control={control}/>
                        </Grid>

                        <Grid item xs={4}>
                            <FormInputSelect name={'nivel'}
                                             control={control}
                                             label={'Quantas fases existe?'}
                                             defaultValue={curso.nivel}
                                             options={itensSelectNiveis}/>
                        </Grid>

                    </Grid>
                </Box>
                <Divider sx={{my: 2}}/>
                <Grid container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="flex-end">
                    <Button variant="contained"
                            size="large"
                            type="submit">
                        {edit ? "Editar" : "Salvar"}
                    </Button>
                </Grid>
            </form>
        </Container>
    );
}
