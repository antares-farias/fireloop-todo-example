/* tslint:disable */
import * as io from 'socket.io-client';
export class SocketBrowser {
  connect(url: any, options: any) {
    console.log(options);
    options.transports = [
      'websocket', 
      'flashsocket', 
      'htmlfile', 
      'xhr-polling', 
      'jsonp-polling', 
      'polling'
    ]
    return io(url, options);
  }
}
