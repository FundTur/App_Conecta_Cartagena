import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from '@env';

export default class ApiAuthenticatedService {
    private axiosInstance: AxiosInstance | null = null;
    private token: string | null = null;

    // Método para crear la instancia de Axios
    private createAxiosInstance() {
        const instance = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Interceptor para añadir el token si está disponible
        instance.interceptors.request.use((request: any) => {
            if (this.token) {
                request.headers['directus_session_token'] = this.token;
            } else {
                console.warn('Warning: Authorization token is missing.');
            }
            return request;
        });

        // Interceptor para manejar la respuesta
        instance.interceptors.response.use((response: AxiosResponse) => {
            return response;
        });

        return instance;
    }

    // Obtener la instancia de Axios, la crea si no existe
    protected get axios() {
        if (!this.axiosInstance) {
            this.axiosInstance = this.createAxiosInstance();
        }
        return this.axiosInstance;
    }

    // Método para configurar el token manualmente
    public setToken(token: string) {
        this.token = token;
    }

    // Método para eliminar el token
    public clearToken() {
        this.token = null;
    }
}
