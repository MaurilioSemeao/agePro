export interface IBaseRepository<T> {
    create(item: T): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}

export interface IBaseRepositoryAppoitment<T> extends IBaseRepository<T> {
    findAllByCompany(companyId: string): Promise<T[]>;
    updateStatus(id: string, appoitmentStatus:string): Promise<T | null>;
}