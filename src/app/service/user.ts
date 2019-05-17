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
    register?:boolean;
    displayName?: string;
    
}
export interface FbUser {
    roles:Roles;
    uid?:string;
    email:string;
    photoURL?: string;
    register?:boolean;
    displayName?: string;
    fcmTokens?: { [token: string]: true };   
}
export class skillshave{
    id:number;
    cat_name:string;
   
}
export interface personal{
    gender:string;
    dateofbirth:Date;
}
export interface contact{
    country:string;
    state:string;
    city:string;
    zipcode:string;
}
export interface education{
    qualify:string;
    school:string;
    Licenses:string;
}
// export interface professional{
//     category:string
//     nbus:string;
//     work:string;
//     company:string;
//     exp:string;
//     rates:string;
// }
export interface skillhave{
    skilly:string;
    subcategoryy:string;
    levely:string;
    tlevely:string;
    listy:string;
}
export interface skillwant{
    skillw:string;
    subcategoryw:string;
    listw:string;
   
}

