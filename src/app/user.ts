export class User {

    id: number;
    name: string;
    lastname: string;
    email: string;
    date: any;
    password: string;


    constructor(name, lastname, email, date, password) {
        this.name = name;
        this.lastname = lastname;
        this.date = date;
        this.email = email;
        this.password = password;
    }


}