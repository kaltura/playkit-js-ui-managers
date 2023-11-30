import { h, render, ComponentChild } from 'preact';
import { PresetItemData, RelativeToTypes } from '../models/preset-item-data';

import { KalturaPlayer } from '@playkit-js/kaltura-player-js';

import { ManagedComponent } from '../../preset-manager/ui/managed-component';

import { InjectedComponent } from '@playkit-js/common/dist/ui-common/injected-component';

export interface PresetItemOptions {
  kalturaPlayer: KalturaPlayer;
  data: PresetItemData;
}

export interface KalturaPlayerPresetComponent {
  label: string;
  presets: string[];
  container: string;
  get: () => () => ManagedComponent | ComponentChild;
  afterComponent?: string;
  beforeComponent?: string;
  replaceComponent?: string;
}

export class PresetItem {
  private _options: PresetItemOptions;

  constructor(options: PresetItemOptions) {
    this._options = options;
  }

  public get playerConfig(): KalturaPlayerPresetComponent[] {
    const configs: KalturaPlayerPresetComponent[] = [];

    for (const presetType in this._options.data.presetAreas) {
      const presetContainer = this._options.data.presetAreas[presetType];
      const { relativeTo } = this._options.data;

      if (!presetContainer) {
        continue;
      }

      const result: KalturaPlayerPresetComponent = {
        label: this._options.data.label,
        presets: [presetType],
        container: presetContainer,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        get: this._render
      };

      if (relativeTo) {
        switch (relativeTo.type) {
          case RelativeToTypes.After:
            result['afterComponent'] = relativeTo.name;
            break;
          case RelativeToTypes.Before:
            result['beforeComponent'] = relativeTo.name;
            break;
          case RelativeToTypes.Replace:
            result['replaceComponent'] = relativeTo.name;
            break;
        }
      }

      configs.push(result);
    }

    return configs;
  }

  private _render = () => {
    if (this._options.data.isolateComponent) {
      const {
        data: { label, fillContainer }
      } = this._options;

      return (
        <InjectedComponent
          label={label}
          fillContainer={fillContainer || false}
          onCreate={this._onCreate}
          onDestroy={this._onDestroy}
        />
      );
    }

    return this._options.data.renderChild();
  };

  private _onDestroy = (options: { context?: object; parent: HTMLElement }): void => {
    // TODO sakal handle destroy
    if (!options.parent) {
      return;
    }

    render(null, options.parent);
  };

  private _onCreate = (options: { context?: object; parent: HTMLElement }): void => {
    try {
      if (!options.parent) {
        return;
      }
      const child = this._options.data.renderChild();

      if (!child) {
        return;
      }

      render(child, options.parent);
    } catch (error) {
      /**/
    }
  };
}
