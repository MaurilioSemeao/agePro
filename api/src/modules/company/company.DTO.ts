import { ICompanyDTOResponse, CompanyDTOrequest } from "./interfaces/ICompany";


export class CompanyDTOResponse {
    private id: string;
    private name: string;
    private phone: string
    private email: string;
    
    constructor(company: ICompanyDTOResponse){
        this.id = company.id;
        this.name = company.name;
        this.phone = company.phone;
        this.email = company.email;
    }
}


export class CompanyDTORequest {
    private name: string;
    private phone: string;

    constructor(company: CompanyDTOrequest){
        this.name = company.name;
        this.phone = company.phone;
    }
}