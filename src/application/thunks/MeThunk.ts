import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../domain/services/UserService";

export default class UserAuthenticatedThunk {
    private static instance: UserAuthenticatedThunk;
    private userService: UserService;

    private constructor() {
        this.userService = new UserService();
    }

    // Método estático para obtener la instancia Singleton
    public static getInstance(): UserAuthenticatedThunk {
        if (!UserAuthenticatedThunk.instance) {
            UserAuthenticatedThunk.instance = new UserAuthenticatedThunk();
        }
        return UserAuthenticatedThunk.instance;
    }

    public getMe = createAsyncThunk('auth/me', async (_, { getState }) => {
        // @ts-ignore
        this.userService.setToken(getState().auth.token);
        const response = await this.userService.me()

        return response.data;
    });
}