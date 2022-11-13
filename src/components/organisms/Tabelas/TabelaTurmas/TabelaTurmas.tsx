import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import dayjs from "dayjs";
import {CircularProgress, Container, Grid, Skeleton} from "@mui/material";
import {LoadingSpinner} from "../../../atoms/LoadingSpinner/LoadingSpinner";
import {DateUtils} from "../../../../utils/date-utils"

interface Column {
    id: 'nome' | 'nivel'| 'curso' | 'numero_maximo_alunos' ;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'nome', label: 'Nome', minWidth: 170},
    {id: 'curso', label: 'curso', minWidth: 100},
    {id: 'nivel', label: 'Nivel', minWidth: 100},
    {id: 'numero_maximo_alunos', label: 'Máximo alunos', minWidth: 100},
];

interface CursoInterface {
    nome: string;
    nivel: string;
    id: string;
}


interface TurmasInterface {
    nome: string;
    nivel: string;
    numero_maximo_alunos: string;
    curso: string;
    id: string;
}

function createData( nome: string,nivel: string, id: string, numero_maximo_alunos: string, curso:string): TurmasInterface {
    return { nome, nivel, id,curso,numero_maximo_alunos};
}

type Props = {
    listTurmas: [];
    listCursos: [];
    loading: boolean
}

export default function TabelaTurmas({listTurmas,listCursos,loading}:Props) {


    const [page, setPage] = useState(0);
    const [turmas, setTurmas] = useState<TurmasInterface[]>([]);
    const [cursos, setCursos] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(() => {
        handleFormatRowsTable(listTurmas);
    }, [listTurmas]);

    useEffect(() => {
        setCursos(listCursos)
    }, [listCursos]);


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFormatRowsTable = (json: []) => {
        setTurmas([])
        let listTurmass: TurmasInterface[] = []
        json.map((item: TurmasInterface) => {
            listTurmass.push(createData(item.nome, item.nivel, item.id,item.numero_maximo_alunos,item.curso))
        })

        setTurmas(listTurmass)
    };


    return (
        <>
            {
                loading ?
                    (<LoadingSpinner/>) :
                    (<div>
                    <TableContainer sx={{maxHeight: 440}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{minWidth: column.minWidth}}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {turmas
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row: TurmasInterface) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    if (column.id === "numero_maximo_alunos" && value.toString() === '999'){

                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                <b>SEM LIMITE</b>
                                                            </TableCell>
                                                        );
                                                    }else if(column.id === "curso"){
                                                        let curso:CursoInterface[] = listCursos.filter((x:CursoInterface)=> x.id === value);

                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {curso.length ? curso[0].nome : ""}
                                                            </TableCell>
                                                        );
                                                    }
                                                    else{
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                            </TableCell>
                                                        );
                                                    }

                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={turmas.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>)
            }

        </>
    );
};