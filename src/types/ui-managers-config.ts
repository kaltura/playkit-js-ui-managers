export type KalturaPluginNames =
    | 'Navigation'
    | 'Q&A'
    | 'Transcript'
    | 'Download'
    | 'Playlist'
    | 'Related'
    | 'Share'
    | 'Info'
    | 'Moderation';

export type UiManagerConfig = {
    upperBarManager: {
        pluginsIconsOrder: {
            [key in KalturaPluginNames | string]: number;
        };
    };
};