import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import {useForm} from "react-hook-form";
import {CursoService} from "../../../../services/CursoService";
import {useNavigate} from "react-router-dom";
import {FormInputText} from "../../../atoms/FormHook/FormInputText/FormInputText";
import {FormInputSelect} from "../../../atoms/FormHook/FormInputSelect/FormInputSelect";
import {FormInputCheckbox} from "../../../atoms/FormHook/FormInputCheckbox/FormInputCheckbox";
import {FormInputNumber} from "../../../atoms/FormHook/FormInputNumber/FormInputNumber";
import {TurmaService} from "../../../../services/TurmaService";


export const FormTurma = () => {
    const [listCursos, setListCursos] = useState<CursoInterface[]>([]);
    const [hasMaxAlunos, setHasMaxAlunos] = useState<boolean>(false);

    const [listNiveis, setListNiveis] = useState(Array(
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
    ));


    const {handleSubmit, control, getValues} = useForm();
    const navigate = useNavigate();


    const onSubmit = async (data: any) => {
        console.log(data)

        let response = await TurmaService.store(data);
        if (response.status == 201) {
            navigate('/turmas');
        }
    };


    const handleListNivel = () => {
        listCursos.map((item) => {
            if (item.id === getValues('curso')) {
                let newListNiveis = [];
                for (let c = 1; c <= item.nivel; c++) {
                    newListNiveis.push({"label": c.toString(), "value": c.toString()})
                }
                setListNiveis(newListNiveis)
            }
        })
    }


    interface CursoInterface {
        nome: string;
        value: string;
        label: string;
        id: string;
        nivel: number;
    }

    const handleFormatListCursos = (cursos: []) => {
        let cursosFormat: CursoInterface[] = [];
        cursos.map((item: CursoInterface) => {
            cursosFormat.push({
                'value': item.id,
                "id": item.id,
                "label": item.nome,
                "nome": item.nome,
                "nivel": item.nivel
            });
        })
        return cursosFormat
    }

    const handleListCursos = async () => {
        try {
            let cursos = await CursoService.index();
            setListCursos(handleFormatListCursos(cursos.data));
        } catch (e) {
            console.log(e)
        }
    }

    const handleEnableMaxAlunos = async (checked: boolean) => {
        setHasMaxAlunos(checked);
    }

    useEffect(() => {
        handleListCursos()
    }, [])

    return (
        <Container sx={{p: 5}}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FormInputText name={"nome"} label={"Nome da turma"} control={control}/>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputSelect name={"curso"} control={control} label={"curso"} options={listCursos}
                                             onChangeFunctions={handleListNivel}/>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputSelect name={"nivel"} control={control} label={"Nivel"} options={listNiveis}/>
                        </Grid>
                        <Grid item xs={3}>
                            <FormInputNumber disabled={!hasMaxAlunos} name={"numero_maximo_alunos"}
                                             label={"Numero máximo de alunos"} control={control}/>
                        </Grid>
                        <Grid item xs={3}>
                            <FormInputCheckbox
                                name={'max_alunos'}
                                control={control}
                                options={[{
                                    label: "Tem máximo de alunos",
                                    value: true,
                                }]}
                                onChangeFunctions={handleEnableMaxAlunos}/>
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
                        Salvar
                    </Button>
                </Grid>
            </form>

        </Container>
    );
}
