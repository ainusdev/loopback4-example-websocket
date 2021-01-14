// // Copyright IBM Corp. 2018. All Rights Reserved.
// // Node module: @loopback/example-shopping
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT
//
// import * as io from 'socket.io-client';
// const pEvent = require('p-event');
// import {expect} from '@loopback/testlab';
// import {HttpServer} from '@loopback/http-server';
// import * as express from 'express';
// import {WebSocketServer} from '@core';
// import {WebSocketController} from "@controller";
//
// describe('WebSocketDemoApplication', () => {
//   let webSocketServer: WebSocketServer;
//   before(createServer);
//   after(() => webSocketServer.stop());
//
//   it('connects to websocket server', async () => {
//     const url = webSocketServer.httpServer.url;
//     const socket = io(`${url}/chats/1`);
//     socket.emit('chat message', 'Test');
//     const reply = await pEvent(socket, 'chat message');
//     expect(reply).to.match(/\[\/chats\/1\#.+\] Test/);
//     socket.close();
//   });
//
//   async function createServer() {
//     /**
//      * Create an Express app to serve the home page
//      */
//     const expressApp = express();
//
//     // Create an http server backed by the Express app
//     const httpServer = new HttpServer(expressApp);
//
//     // Create ws server from the http server
//     webSocketServer = new WebSocketServer(httpServer);
//     webSocketServer.use((socket, next) => {
//       console.log('Global middleware - socket:', socket.id);
//       next();
//     });
//     // Add a route
//     const namespace = webSocketServer.route(WebSocketController, /^\/chats\/\d+$/);
//     namespace.use((socket, next) => {
//       console.log(
//           'Middleware for namespace %s - socket: %s',
//           socket.nsp.name,
//           socket.id,
//       );
//       next();
//     });
//
//   }
// });
