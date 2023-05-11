import { ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

export class IconComponent extends preact.Component {
    render() {
        return h('div', null, 'icon');
    }
}