const { h, preact } = KalturaPlayer.ui;
export class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon a-icon' }, 'A');
  }
}

export class PanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel a-panel' }, 'A');
  }
}

export class AnotherIconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon b-icon' }, 'B');
  }
}

export class AnotherPanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel b-panel' }, 'B');
  }
}

export class SomeIconComponent extends preact.Component {
  render() {
    return h(
      'div',
      {
        className: 'icon c-icon',
        style: {
          backgroundColor: this.props.isActive ? 'green' : '',
          color: this.props.isActive ?  'whitesmoke' : '',
        }
      },
      'C'
    );
  }
}

export class SomePanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel c-panel' }, 'C');
  }
}

export class MoreIconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon d-icon' }, 'D');
  }
}

export class MorePanelItemComponent extends preact.Component {
  render() {
    return h('div', { className: 'panel d-panel' }, 'D');
  }
}
