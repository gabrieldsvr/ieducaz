import axios from "axios";

const BASE = 'https://ieducaz-backend.adminsystem.com.br/api';

const paths = {
    'INDEX': '/alunos',
    'STORE': '/alunos',
    'SHOW': '/alunos/',
    'UPDATE': '/alunos/',
    'DELETE': '/alunos/',
}

export const AlunoService = {
    index: async () => {
        let response = await axios.get(`${BASE}/alunos`);
        return response.data

    },
    store: async () => {

    },
    show: async () => {

    },
    update: async () => {

    },
    delete: async () => {

    }
};