import ApiAuthenticatedService from "./ApiAuthenticatedService";

export default class UserService extends ApiAuthenticatedService {
    async me() {
        return await this.axios.get('/users/me?fields[]=*&fields[]=role.id');
    }
}