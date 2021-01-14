"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const http_server_1 = require("@loopback/http-server");
const express = require("express");
const path = require("path");
const core_2 = require("./core");
const controllers_1 = require("./controllers");
// tslint:disable:no-any
class WebSocketDemoApplication extends core_1.Application {
    constructor(options = {}) {
        super(options);
        /**
         * Create an Express app to serve the home page
         */
        const expressApp = express();
        const root = path.resolve(__dirname, '../../public');
        expressApp.use('/', express.static(root));
        // Create an http server backed by the Express app
        this.httpServer = new http_server_1.HttpServer(expressApp, options.websocket);
        // Create ws server from the http server
        const wsServer = new core_2.WebSocketServer(this.httpServer);
        this.bind('servers.websocket.server1').to(wsServer);
        wsServer.use((socket, next) => {
            console.log('Global middleware - socket:', socket.id);
            next();
        });
        // Add a route
        const ns = wsServer.route(controllers_1.WebSocketController, /^\/chats\/\d+$/);
        ns.use((socket, next) => {
            console.log('Middleware for namespace %s - socket: %s', socket.nsp.name, socket.id);
            next();
        });
        this.wsServer = wsServer;
    }
    start() {
        return this.wsServer.start();
    }
    stop() {
        return this.wsServer.stop();
    }
}
exports.WebSocketDemoApplication = WebSocketDemoApplication;
//# sourceMappingURL=websocket-demo-application.js.map