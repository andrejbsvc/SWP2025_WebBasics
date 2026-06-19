export interface Observer {
    inform(event: string,data?: any): void;
}

