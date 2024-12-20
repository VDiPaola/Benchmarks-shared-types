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