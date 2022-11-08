export interface LoginInputs {
    user_email: string;
    password: String;
}

export interface RegisterInputs {
    username: string;
    email: String;
    password: String;
    repassword?: String;
}
