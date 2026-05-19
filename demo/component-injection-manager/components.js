const { ui } = KalturaPlayer;
const { h, preact } = ui;

// Image Component - displays a circular avatar image
export class RoundImageComponent extends preact.Component {
  render() {
    const { src, title } = this.props;
    return h('div', { className: 'injected-avatar-component-rounded' }, [
      h('img', {
        src: src || 'avatar-image.png',
        alt: title || 'Avatar',
        className: 'avatar-image'
      })
    ]);
  }
}

export class RegularImageComponent extends preact.Component {
  render() {
    const { src, title } = this.props;
    return h('div', { className: 'injected-avatar-component' }, [
      h('img', {
        src: src || 'avatar-image.png',
        alt: title || 'Avatar',
        className: 'avatar-image-regular',
      })
    ]);
  }
}
