export type DatabaseBenchmarkType = {
    id: string;
    name: string;
    data: string;
    created_at?: number;
    updated_at?: number;
}

export type DatabaseUserBenchmarkScoreType = {
    id?: string;
    user_id: string;
    score: number;
    created_at?: number;
    updated_at?: number;
}

export type DatabaseUserType = {
    id?: string;
    discord_id: string;
    kovaaks_username: string;
    role: "user" | "admin";
    created_at?: number;
}

export type DatabaseAdminType = {
    id?: string;
    discord_id: string;
    name: string;
    created_at?: number;
}