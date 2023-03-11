interface Community {
    in_wantlist: number;
    in_collection: number;
}

interface Stats {
    community: Community;
}

export interface Song {
    id: number;
    title: string;
    type: string;
    main_release: number;
    artist: string;
    role: string;
    resource_url: string;
    year: number;
    thumb: string;
    stats: Stats;
}

export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
};