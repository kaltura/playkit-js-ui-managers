// eslint-disable-next-line no-undef
const {h, preact} = KalturaPlayer.ui;

export class IconComponent extends preact.Component {
  render() {
    return h('div', {className: 'icon a'}, 'A');
  }
}

export class PanelItemComponent extends preact.Component {
  render() {
    return h('div', {className: 'panel a'}, 'A');
  }
}

export class AnotherIconComponent extends preact.Component {
  render() {
    return h('div', {className: 'icon b'}, 'B');
  }
}

export class AnotherPanelItemComponent extends preact.Component {
  render() {
    return h('div', {className: 'panel b'}, 'B');
  }
}
