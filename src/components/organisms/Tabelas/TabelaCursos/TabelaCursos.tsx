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
import {Delete, Edit} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {AlertDialog} from "../../../molecules/AlertDialog/AlertDialog";
import {CursoService} from "../../../../services/CursoService";

interface Column {
    id: 'nome' | 'nivel';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'nome', label: 'Nome', minWidth: 100},
    {id: 'nivel', label: 'Nivel', minWidth: 100},
];

interface CursoInterface {
    nome: string;
    nivel: string;
    id: string;
}

function createData(nome: string, nivel: string, id: string): CursoInterface {
    return {nome, nivel, id};
}

type Props = {
    listCursos: [];
    loading: boolean;
    reload?: any
}

export default function TabelaCursos({listCursos, loading, reload}: Props) {


    const [page, setPage] = useState(0);
    const [cursos, setCursos] = useState<CursoInterface[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [idSelected, setIdSelected] = React.useState<string>('');

    useEffect(() => {
        handleFormatRowsTable(listCursos);
    }, [listCursos]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFormatRowsTable = (json: []) => {
        setCursos([])
        let listCursoss: CursoInterface[] = []
        json.map((item: CursoInterface) => {
            listCursoss.push(createData(item.nome, item.nivel, item.id))
        })

        setCursos(listCursoss)
    };

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDeleteItem = async () => {
        await CursoService.delete(idSelected);
        reload()
        handleCloseDialog()
    };

    return (
        <>
            <AlertDialog handleClose={handleCloseDialog}
                         handleConfirm={handleDeleteItem}
                         state={openDialog}
                         title={'Você tem certeza?'}
                         text={"Se você excluir perderar os dados permanentemente!"}/>
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
                                                style={{minWidth: column.minWidth}}>
                                                {column.label}
                                            </TableCell>
                                        ))}
                                        <TableCell
                                            key={'acoes'}
                                            style={{minWidth: 170}}>
                                            Ações
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cursos
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row: CursoInterface) => {
                                            let id_row: string = "";
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                    {columns.map((column) => {
                                                        id_row = row.id;
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                    <TableCell>
                                                        <Link to={"/cursos/" + id_row + "/editar"}
                                                              className="item-menu">
                                                            <IconButton color="primary" aria-label="Editar"
                                                                        component="label">
                                                                <Edit/>
                                                            </IconButton>
                                                        </Link>
                                                        <IconButton color="error" aria-label="Excluir"
                                                                    component="label"
                                                                    onClick={() => {
                                                                        handleClickOpenDialog()
                                                                        setIdSelected(id_row)

                                                                    }}>
                                                            <Delete/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[2, 25, 100]}
                            component="div"
                            count={cursos.length}
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