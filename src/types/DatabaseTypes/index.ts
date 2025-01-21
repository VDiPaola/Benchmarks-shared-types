export type DatabaseBenchmarkType = {
    id: string;
    name: string;
    data: string;
}

export type DatabaseUserBenchmarkScoreType = {
    id: string;
    userId: string;
    score: number;
}

export type DatabaseUserType = {
    id: string;
    role: string;
    scores: string;
}

export type DatabaseAdminType = {
    id: string;
    discordId: string;
    name: string;
}