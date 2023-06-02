export class UserLoginDTO {
    public email: string;
    public password: string;

    constructor(data: any) {
        this.email = data.email?.toLowerCase()?.trim();
        this.password = data.password;
    }
}