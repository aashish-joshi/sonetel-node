export class Sonetel {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        console.log('Sonetel constructor');
        this.username = username;
        this.password = password;
    }

    generateToken(refresh: boolean = false) {
        if (refresh) {
            console.log('Sonetel generateToken refresh');
            return 'Sonetel generateToken refresh'
        } else {
            console.log('Sonetel generateToken');
            return 'Sonetel generateToken'
        }
    }

    getAccount() {
        console.log('Sonetel getAccount');
        return 'Sonetel getAccount'
    }

    getUsers(){
        console.log('Sonetel getUers');
        return 'Sonetel getUers'
    }

}

// export default Sonetel;