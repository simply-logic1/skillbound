export interface Roles{
    user?:boolean;
    admin?:boolean;
   
}
export interface User {
    roles:Roles;
    uid?:string;
    displayName:string;
    photoURL?: string;
    email:string;
    phonenumber:string;
    fcmTokens?: { [token: string]: true };   
}
