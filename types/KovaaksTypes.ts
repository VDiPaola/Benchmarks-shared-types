export type KovaaksPlaylistDataType = {
    page: number;
    max: number;
    total: number;
    data: KovaaksPlaylistType[];
}

export type KovaaksPlaylistType = {
    playlistName: string;
    subscribers: number;
    scenarioList: KovaaksScenarioType[];
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

export type KovaaksScenarioType = {
    author: string;
    aimType: string;
    playCount: number;
    scenarioName: string;
    webappUsername: string;
    steamAccountName: string;
}