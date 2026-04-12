import { ICompanyDTOResponse, CompanyDTOrequest } from "./interfaces/ICompany";


export class CompanyDTOResponse {
    readonly id: string;
    readonly name: string;
    readonly phone: string
    readonly email: string;
    
    constructor(company: ICompanyDTOResponse){
        this.id = company.id;
        this.name = company.name;
        this.phone = company.phone;
        this.email = company.email;
    }
}


export class CompanyDTORequest {
    readonly name: string;
    readonly phone: string;

    constructor(company: CompanyDTOrequest){
        this.name = company.name;
        this.phone = company.phone;
    }
}