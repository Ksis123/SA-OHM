import { StatusInterface } from "./iStatus";
import { TypesInterface } from "./iTypes";
import { AdminsInterface } from "./iAdmins";

export interface ScholarshipInterface {
    ID?: number;
    Name?: string   | null;
   
    AdminID?: number;
    Admin?: AdminsInterface; 

    StatusID?: number;
    Scholarships_status?: StatusInterface ;
   
    TypeID?: number;
    Scholarships_type?: TypesInterface;
    
    Details:   String  | null;

    }