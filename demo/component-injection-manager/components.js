const { ui } = KalturaPlayer;
const { h, preact } = ui;

// Image Component - displays a circular avatar image
export class RoundImageComponent extends preact.Component {
  render() {
    const { src, title } = this.props;
    return h('div', { className: 'injected-avatar-component' }, [
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
        className: 'avatar-image',
      })
    ]);
  }
}

// Info Card Component - displays information card
export class InfoCardComponent extends preact.Component {
  render() {
    const { title, content, color } = this.props;
    return h('div', {
      className: 'injected-info-card',
      style: {
        backgroundColor: color || '#2ecc71',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center'
      }
    }, [
      h('h2', { style: { margin: '0 0 10px 0', fontSize: '24px' } }, title || 'Info Card'),
      h('p', { style: { margin: 0, fontSize: '16px', lineHeight: '1.5' } }, content || 'This is an injected component demonstration.')
    ]);
  }
}

// Video Info Component - displays video metadata
export class VideoInfoComponent extends preact.Component {
  render() {
    return h('div', { className: 'injected-video-info' }, [
      h('div', { className: 'info-header' }, 'Video Information'),
      h('div', { className: 'info-content' }, [
        h('div', { className: 'info-item' }, [
          h('span', { className: 'info-label' }, 'Title: '),
          h('span', { className: 'info-value' }, 'Demo Video')
        ]),
        h('div', { className: 'info-item' }, [
          h('span', { className: 'info-label' }, 'Duration: '),
          h('span', { className: 'info-value' }, '3:28')
        ]),
        h('div', { className: 'info-item' }, [
          h('span', { className: 'info-label' }, 'Resolution: '),
          h('span', { className: 'info-value' }, '1920x1080')
        ]),
        h('div', { className: 'info-item' }, [
          h('span', { className: 'info-label' }, 'Format: '),
          h('span', { className: 'info-value' }, 'HLS')
        ])
      ])
    ]);
  }
}

// Chat Widget Component - simulates a chat interface
export class ChatWidgetComponent extends preact.Component {
  render() {
    return h('div', { className: 'injected-chat-widget' }, [
      h('div', { className: 'chat-header' }, 'Live Chat'),
      h('div', { className: 'chat-messages' }, [
        h('div', { className: 'chat-message' }, [
          h('strong', {}, 'User1: '),
          h('span', {}, 'Great video!')
        ]),
        h('div', { className: 'chat-message' }, [
          h('strong', {}, 'User2: '),
          h('span', {}, 'Thanks for sharing')
        ]),
        h('div', { className: 'chat-message' }, [
          h('strong', {}, 'User3: '),
          h('span', {}, 'Very helpful content')
        ])
      ]),
      h('div', { className: 'chat-input-container' }, [
        h('input', {
          type: 'text',
          className: 'chat-input',
          placeholder: 'Type a message...'
        }),
        h('button', { className: 'chat-send-button' }, 'Send')
      ])
    ]);
  }
}
