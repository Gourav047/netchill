import { ENVIRONMENT } from "../environment"

export const apiEndPoint = ENVIRONMENT.base_url;

class Account{
    readonly common = `${apiEndPoint}/Account`;
    readonly Signup = `${this.common}/signup`;
    readonly Login = `${this.common}/login`;
}

class Dashboard{
    readonly common = `${apiEndPoint}/Dashboard`;
    readonly getMovies = `${this.common}/GetMovies`;
    readonly getMoviewsByIds = `${this.common}/GetMoviesById/`;
    readonly getMoviewsByCategory = `${this.common}/GetMoviesByCategory/`
}

class Admin{
    readonly common = `${apiEndPoint}/Admin`;
    readonly getMovies = `${this.common}/GetMovies`;
    readonly uploadMovies = `${this.common}/UploadMovie`;
    readonly UpdateMovies = `${this.common}/UpdateMovie/`;
    readonly DeleteMovies = `${this.common}/DeleteMovie/`;
    readonly revokeSubscription = `${this.common}/RevokeSubscription/`;
    readonly getUsers= `${this.common}/GetUsers`;
}

class User{
    readonly common = `${apiEndPoint}/User`;
    readonly removeFromList = `${this.common}/RemoveFromList`;
    readonly myList = `${this.common}/MyList`
}



class Api{
    readonly Account = new Account();
    readonly Dashboard = new Dashboard();
    readonly Admin = new Admin();
    readonly User = new User();
}

export const api = new Api();