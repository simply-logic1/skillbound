export interface Roles{
    user?:boolean;
    admin?:boolean;
}
export interface User {
    uid?:string;
    email:string;
    password:string;
    photoURL?: string;
    displayName?: string;
    fcmTokens?: { [token: string]: true };
    admin?:boolean;
}
