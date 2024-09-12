import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../domain/services/AuthApiService";

export default class UserThunks {
    // Instancia privada para almacenar el Singleton
    private static instance: UserThunks;
    private authService: AuthService;

    // Hacemos el constructor privado para evitar que se cree con "new"
    private constructor() {
        this.authService = new AuthService();
    }

    // Método estático para obtener la instancia Singleton
    public static getInstance(): UserThunks {
        if (!UserThunks.instance) {
            UserThunks.instance = new UserThunks();
        }
        return UserThunks.instance;
    }

    // Thunk de login que usa el servicio Auth
    public Login = createAsyncThunk('auth/login', async (payload: any, { dispatch }) => {
        const payloadLogin = {
            email: payload.email,
            password: payload.password,
            mode: 'session',
        }
        const headers = await this.authService.login(payloadLogin);
        const cookie = headers['set-cookie'];
        const cookieValue = cookie ? cookie[0] : undefined;

        if (cookieValue) {
            // Extraemos el valor de la cookie directus_session_token
            const token = cookieValue
                .split(';') // Separa los atributos de la cookie por ';'
                .find(item => item.trim().startsWith('directus_session_token')) // Busca el atributo que empieza con 'directus_session_token'
                ?.split('=')[1]; // Extrae el valor del token (después de '=')

            return token;
        }

        return undefined;

    });
}
