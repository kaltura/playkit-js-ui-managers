const { ui } = KalturaPlayer;
const { h, preact } = ui;

export class IconComponent extends preact.Component {
  render() {
    return h('div', { tabIndex: 0, className: ui.style.upperBarIcon + ' ' + 'icon a-icon' }, 'A');
  }
}

export class PanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel a-panel' }, 'A');
  }
}

export class AnotherIconComponent extends preact.Component {
  render() {
    return h('div', { tabIndex: 0, className: ui.style.upperBarIcon + ' ' + 'icon b-icon' }, 'B');
  }
}

export class AnotherPanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel b-panel' }, 'B');
  }
}

export class SomeIconComponent extends preact.Component {
  render() {
    return h('div', { tabIndex: 0, className: ui.style.upperBarIcon + ' ' + 'icon c-icon' }, 'C');
  }
}

export class SomePanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel c-panel' }, 'C');
  }
}

export class MoreIconComponent extends preact.Component {
  render() {
    return h('div', { tabIndex: 0, className: ui.style.upperBarIcon + ' ' + 'icon d-icon' }, 'D');
  }
}

export class MorePanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel d-panel' }, 'D');
  }
}
