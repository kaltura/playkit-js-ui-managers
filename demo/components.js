const { h, preact } = KalturaPlayer.ui;
export class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon a' }, 'A');
  }
}

export class PanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel a' }, 'A');
  }
}

export class AnotherIconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon b' }, 'B');
  }
}

export class AnotherPanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel b' }, 'B');
  }
}

export class SomeIconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon c' }, 'C');
  }
}

export class SomePanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel c' }, 'C');
  }
}
