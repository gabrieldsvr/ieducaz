import axios from "axios";

const BASE = 'https://ieducaz-backend.adminsystem.com.br/api';

const paths = {
    'INDEX': '/turmas',
    'STORE': '/turmas',
    'SHOW': '/turmas/',
    'UPDATE': '/turmas/',
    'DELETE': '/turmas/',
}

export const TurmaService = {
    store: async (data: {}) => {
        let response = await axios.post(`${BASE}/turmas`, data);
        return response.data

    },
    index: async () => {
        try {
            let response = await axios.get(`${BASE}/turmas`);
            return response.data
        } catch (e) {
            console.log(e)
            return ""
        }
    },
    update: async () => {

    },
    delete: async () => {

    }
};