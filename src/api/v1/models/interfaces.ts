export interface Project {
    id: number;
    name: string;
    status: string;
    createdAt: string;
};

export interface AuthorizationOptions {
    hasRole: Array<"admin" | "lead" | "developer">;
    allowSameUser?: boolean;
};