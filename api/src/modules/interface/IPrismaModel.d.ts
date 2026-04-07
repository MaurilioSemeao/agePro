export interface PrismaModel<T> {
    create(args: { data: T }): Promise<T>;
    findUnique(args: { where: { id: string } }): Promise<T | null>;
    findMany(): Promise<T[]>;
    update(args: { where: { id: string }, data: Partial<T> }): Promise<T | null>;
    delete(args: { where: { id: string } }): Promise<any>;
}

