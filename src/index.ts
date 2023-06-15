export class Sonetel {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    generateToken(refresh: boolean = false) {
        if (refresh) {
            return 'Sonetel generateToken refresh'
        } else {
            return 'Sonetel generateToken'
        }
    }

    getAccount() {
        return 'Sonetel getAccount'
    }

    getUsers(){
        return 'Sonetel getUers'
    }

}
