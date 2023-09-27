export interface TransactionInterface {
    start(): Promise<void>;
    commit(): Promise<void>;
    rollback(): Promise<void>;
    do<T>(workFn: (transaction: TransactionInterface) => Promise<T>): Promise<T>;
    getTransaction(): any;
}