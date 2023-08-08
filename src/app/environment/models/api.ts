import { ENVIRONMENT } from "../environment"

export const apiEndPoint = ENVIRONMENT.base_url;

class Account{
    readonly common = `${apiEndPoint}/Account`;
    readonly Signup = `${this.common}/signup`;
    readonly Login = `${this.common}/login`;
}

class Api{
    readonly Account = new Account();
}

export const api = new Api();