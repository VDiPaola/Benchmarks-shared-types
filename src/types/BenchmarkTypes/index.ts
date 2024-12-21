export type BenchmarkType = {
    id:string;
    name: string;
    sheetId: number;
    scenarios: ScenarioType[];
    rankings: RankingType[];
    socials: SocialLinkType[];
    rankingCalculation: RankingCalculationType[];
    playlistDuration?: number;
    description?: string;
    typePercentages: AimKindPercentType;
}

export type RankingCalculationType = {
    calculation: string;
    rankName: string;
}

export type AimKindPercentType = {
    [key in AimKindType]: number;
}

export type ScenarioType = {
    id:string;
    name: string;
    rankings: RankingType[];
    author: string; //steam account name
    leaderboardId?: string;
    type?: AimKindType;
}

export type AimKindType = "Clicking" | "Tracking" | "Switching"

export type RankingType = {
    rankName: string;
    rankValue: number;
    columnIndex: number;
}

export type SocialLinkType = {
    link: string;
    image: string;
}