import * as React from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import {useForm} from "react-hook-form";
import {FormInputSelect} from "../../../atoms/FormHook/FormInputSelect/FormInputSelect";
import {FormInputDate} from "../../../atoms/FormHook/FormInputDate/FormInputDate";
import {CursoService} from "../../../../services/CursoService";


const optionsDefaultRadio = [
    {
        label: "opcao 1",
        value: "1",
    },
    {
        label: "Opção  2",
        value: "2",
    },
];


export const FormAluno =  () => {

    const {handleSubmit, control, setValue} = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)
        await handleSubmitPost(data)
    };


    const handleSubmitPost =async (data:any) => {
        let post = await CursoService.store(data);
        console.log(post);
        return post;
    }

    return (
        <>
            <br/>
            <Container sx={{p: 5}}>
                <form>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                {/*<FormInputText name={"aluno"} control={control} label={"Nome completo"} />*/}
                                <FormInputDate name={"aluno"} control={control} label={"Nome completo"}/>
                            </Grid>
                            <Grid item xs={8}>
                                {/*<FormInputRadio name={"teste2"} control={control} row={false} options={optionsDefaultRadio}/>*/}
                            </Grid>
                            <Grid item xs={4}>
                                <FormInputSelect name={"teste"} control={control} label={"Nome completo"}
                                                 options={optionsDefaultRadio}/>
                            </Grid>
                            <Grid item xs={4}>
                                {/*    <TextField id="matricula" type="number" label="Matrícula" variant="outlined"*/}
                                {/*               fullWidth*/}
                                {/*               required/>*/}
                            </Grid>
                            <Grid item xs={4}>
                                {/*<InputDate title="Data de nascimento"/>*/}
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{my: 2}}/>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-end">

                        <Button variant="contained" size="large" type="submit" onClick={handleSubmit(onSubmit)}>
                            Salvar
                        </Button>
                    </Grid>

                </form>
            </Container>

        </>
    );
}
