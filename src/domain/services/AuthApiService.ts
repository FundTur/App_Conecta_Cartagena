import ApiService from "./ApiService";

export default class AuthService extends ApiService {
    async login(payload: any) {
        const response = await this.axios.post('/auth/login', payload);

        return response.headers;
    }

    async register(email: string, password: string) {
        return await this.axios.post('/users/register', { email, password });
    }
}