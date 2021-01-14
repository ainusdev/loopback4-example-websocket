"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const io = require("socket.io-client");
const pEvent = require('p-event');
const testlab_1 = require("@loopback/testlab");
const websocket_demo_application_1 = require("../../websocket-demo-application");
describe('WebSocketDemoApplication', () => {
    let app;
    before(givenApp);
    after(() => app.stop());
    it('connects to websocket server', async () => {
        const url = app.wsServer.httpServer.url;
        const socket = io(`${url}/chats/1`);
        socket.emit('chat message', 'Test');
        const reply = await pEvent(socket, 'chat message');
        testlab_1.expect(reply).to.match(/\[\/chats\/1\#.+\] Test/);
        socket.close();
    });
    async function givenApp() {
        app = new websocket_demo_application_1.WebSocketDemoApplication({ websocket: { port: 0 } });
        await app.start();
    }
});
//# sourceMappingURL=websocket.acceptance.js.map