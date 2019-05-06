export interface Roles{
    user?:boolean;
    admin?:boolean;
   
}
export interface User {
    roles:Roles;
    uid?:string;
    email:string;
    phonenumber:string;
    photoURL?: string;
    displayName?: string;

    
}
export interface FbUser {
    roles:Roles;
    uid?:string;
    email:string;
    photoURL?: string;
    displayName?: string;
    fcmTokens?: { [token: string]: true };   
}
export class skillshave{
    id:number;
    cat_name:string;
   
}

