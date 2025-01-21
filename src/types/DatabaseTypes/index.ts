export type DatabaseBenchmarkType = {
    id: string;
    name: string;
    data: string;
}

export type userScoreDBType = {
    id: string;
    userId: string;
    score: number;
}

export type userDBType = {
    id: string;
    role: string;
    scores: string;
}

export type adminDBType = {
    id: string;
    discordId: string;
    name: string;
}