export type KovaaksPlaylistDataType = {
    page: number;
    max: number;
    total: number;
    data: KovaaksPlaylistType[];
}

export type KovaaksScenarioDataType = {
    page: number;
    max: number;
    total: number;
    data: KovaaksScenarioType[];
}

export type KovaaksLeaderboardDataType = {
    page: number;
    max: number;
    total: number;
    data: KovaaksLeaderboardType[];
}

export type KovaaksPlaylistType = {
    playlistName: string;
    subscribers: number;
    scenarioList: KovaaksPlaylistScenarioType[];
    playlistCode: string;
    playlistId: string;
    published: string;
    steamId: string;
    steamAccountName: string;
    webappUsername: string;
    description: string;
    aimType: string;
    playlistDuration: number;
}

export type KovaaksPlaylistScenarioType = {
    author: string;
    aimType: string;
    playCount: number;
    scenarioName: string;
    webappUsername: string;
    steamAccountName: string;
}

export type KovaaksScenarioType = {
    leaderboardId: string;
    scenarioName: string;
    scenario: KovaaksScenarioMetaType
}


export type KovaaksScenarioMetaType = {
    aimType: string;
    authors: string[];
    description: string;
}

export type KovaaksLeaderboardType = {
    rank: number;
    steamId: string;
    score: number;
    steamAccountName: string;
    webappUsername: string;
    country: string;
    kovaaksPlusActive: boolean;
    attributes: KovaaksLeaderboardAttributesType;
}

export type KovaaksLeaderboardAttributesType = {
    fov: number;
    cm360: number;
    epoch: number;
    kills: number;
    score: number;
    avgFps: number;
    avgTtk: number;
    fovScale: string;
    vertSens: number;
    horizSens: number;
    resolution: string;
    sensScale: string;
    accuracyDamage: number;
}