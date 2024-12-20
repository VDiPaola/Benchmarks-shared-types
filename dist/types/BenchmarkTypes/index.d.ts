export type BenchmarkType = {
    id: string;
    name: string;
    sheetId: number;
    scenarios: ScenarioType[];
    rankings: RankingType[];
    socials: SocialLinkType[];
    rankingCalculation: string;
    playlistDuration?: number;
    description?: string;
    typePercentages: AimKindPercentType;
};
export type AimKindPercentType = {
    [key in AimKindType]: number;
};
export type ScenarioType = {
    id: string;
    name: string;
    rankings: RankingType[];
    author: string;
    leaderboardId?: string;
    type?: AimKindType;
};
export type AimKindType = "Clicking" | "Tracking" | "Switching";
export type RankingType = {
    rankName: string;
    rankValue: number;
    columnIndex: number;
};
export type SocialLinkType = {
    link: string;
    image: string;
};
