import {ThemesManagerConfig} from "../services/themes-manager/themes-manager";
import {UpperBarManagerConfig} from "../services/upper-bar-manager/upper-bar-manager";

export type UiManagerConfig = {
    upperBarManager: UpperBarManagerConfig
    themesManager?: ThemesManagerConfig
};