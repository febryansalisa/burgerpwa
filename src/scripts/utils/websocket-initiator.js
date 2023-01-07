import NotifHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler() {
    NotifHelper.sendNotification({
      title: 'soloward kafe',
      options: {
        image: 'https://media.hitekno.com/thumbs/2022/02/16/78144-sanji-one-piece/730x480-img-78144-sanji-one-piece.jpg',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
