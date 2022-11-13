import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {LoadingSpinner} from "../../../atoms/LoadingSpinner/LoadingSpinner";
import {DateUtils} from "../../../../utils/date-utils"

interface Column {
    id: 'nome' | 'matricula' | 'sexo' | 'data_nascimento';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'nome', label: 'Nome', minWidth: 170},
    {id: 'matricula', label: 'Matrícula', minWidth: 100},
    {
        id: 'sexo',
        label: 'Sexo',
        minWidth: 170,
        align: 'right'
    },
    {
        id: 'data_nascimento',
        label: 'Data de Nascimento',
        minWidth: 170,
        align: 'right'
    },
];


interface AlunoInterface {
    nome: string;
    matricula: string;
    sexo: string;
    data_nascimento: string;
}

function createData(nome: string, matricula: string, sexo: string, data_nascimento: string): AlunoInterface {
    let data = DateUtils.formatDate(data_nascimento);
    return {nome, matricula, sexo, data_nascimento: data};
}

type Props = {
    listAlunos: [];
    loading: boolean
}

export default function TabelaAlunos({listAlunos, loading}: Props) {


    const [page, setPage] = useState(0);
    const [alunos, setAlunos] = useState<AlunoInterface[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(2);


    useEffect(() => {
        handleFormatRowsTable(listAlunos);
    }, [listAlunos]);


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFormatRowsTable = (json: []) => {
        setAlunos([])
        let listAlunoss: AlunoInterface[] = []
        json.map((item: AlunoInterface) => {
            listAlunoss.push(createData(item.nome, item.matricula, item.sexo, item.data_nascimento))
        })

        setAlunos(listAlunoss)
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
                                    {alunos
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row: AlunoInterface) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.matricula}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[2, 25, 100]}
                            component="div"
                            count={alunos.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>)
            }

        </>
    );
}