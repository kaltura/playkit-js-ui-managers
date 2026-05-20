import { ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

export class TestComponent extends preact.Component {
  render() {
    const { title, message } = this.props;
    return h('div', { className: 'test-component' }, [
      title && h('h3', null, title),
      message && h('p', null, message)
    ]);
  }
}
