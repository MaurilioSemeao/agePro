export interface PrismaModel<T> {
    create(args: { data: T }): Promise<T>;
    findUnique(args: { where: { id: string }; include?: Record<string, boolean> }): Promise<T | null>;
    findMany(args?: { where?: Partial<T>; include?: Record<string,boolean> }): Promise<T[]>;
    update(args: { where: { id: string }, data: Partial<T> }): Promise<T | null>;
    delete(args: { where: { id: string } }): Promise<any>;
}

