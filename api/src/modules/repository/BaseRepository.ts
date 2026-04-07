import { IBaseRepository } from "../interface/IBaseRespository";
import { PrismaModel } from "../interface/IPrismaModel";

export class BaseRepository<T> implements IBaseRepository<T> {
    private _model: PrismaModel<T>;

    constructor(model: PrismaModel<T>){
        this._model = model;
    }

    async create(item: T): Promise<T> {
        return await this._model.create({ data: item });
    }
    async findById(id: string): Promise<T | null> {
        return await this._model.findUnique({ where: { id } });
    } 
    async findAll(): Promise<T[]> {       
        return await this._model.findMany();
    }
    async update(id: string, item: T): Promise<T | null> {
        return await this._model.update({ where: { id }, data: item });
    }              
    async delete(id: string): Promise<boolean> {
        await this._model.delete({ where: { id } });
        return true;
    }     

}