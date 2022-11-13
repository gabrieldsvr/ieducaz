import axios from "axios";

const BASE = 'http://127.0.0.1:8000/api';

const paths = {
    'INDEX': '/cursos',
    'STORE': '/cursos',
    'SHOW': '/cursos/',
    'UPDATE': '/cursos/',
    'DELETE': '/cursos/',
}

export const CursoService = {
    index: async () => {
        try {
            let response = await axios.get(`${BASE}/cursos`);
            return response.data
        } catch (e) {
            console.log(e)
            return ""
        }
    },
    store: async (data: {}) => {
        let response = await axios.post(`${BASE}/cursos`, data);
        return response

    },
    show: async (id: string) => {
        try {
            let response = await axios.get(`${BASE}/cursos/${id}`);
            return response.data
        } catch (e) {
            console.log(e)
            return ""
        }
    },
    update: async (id: string, data: {}) => {
        return await axios.put(`${BASE}/cursos/${id}`, data);
    },
    delete: async (id: string) => {
        try {
            return await axios.delete(`${BASE}/cursos/${id}`);
        } catch (e) {
            console.log(e)
            return ""
        }
    }
};