const { ui } = KalturaPlayer;
const { h, preact } = ui;

const defaultAvatarUrl = 'https://cfvod.kaltura.com/p/5289442/sp/528944200/thumbnail/entry_id/1_3ny9hmu7/version/100001/height/395/width/560';

// Image Component - displays a circular avatar image
export class RoundImageComponent extends preact.Component {
  render() {
    const { title } = this.props;
    return h('div', { className: 'injected-avatar-component-rounded' }, [
      h('img', {
        src: defaultAvatarUrl,
        alt: title || 'Avatar',
        className: 'avatar-image'
      })
    ]);
  }
}

export class RegularImageComponent extends preact.Component {
  render() {
    const { title } = this.props;
    return h('div', { className: 'injected-avatar-component' }, [
      h('img', {
        src: defaultAvatarUrl,
        alt: title || 'Avatar',
        className: 'avatar-image-regular',
      })
    ]);
  }
}
