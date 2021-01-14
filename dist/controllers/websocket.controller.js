"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_decorator_1 = require("../decorators/websocket.decorator");
/**
 * A demo controller for websocket
 */
let WebSocketController = class WebSocketController {
    constructor(socket) {
        this.socket = socket;
    }
    /**
     * The method is invoked when a client connects to the server
     * @param socket
     */
    connect(socket) {
        console.log('Client connected: %s', this.socket.id);
        socket.join('room 1');
    }
    /**
     * Register a handler for 'chat message' events
     * @param msg
     */
    // @ws.emit('namespace' | 'requestor' | 'broadcast')
    handleChatMessage(msg) {
        console.log('Chat message: %s', msg);
        this.socket.nsp.emit('chat message', `[${this.socket.id}] ${msg}`);
    }
    /**
     * Register a handler for all events
     * @param msg
     */
    logMessage(...args) {
        console.log('Message: %s', args);
    }
    /**
     * The method is invoked when a client disconnects from the server
     * @param socket
     */
    disconnect() {
        console.log('Client disconnected: %s', this.socket.id);
    }
};
__decorate([
    websocket_decorator_1.ws.connect(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebSocketController.prototype, "connect", null);
__decorate([
    websocket_decorator_1.ws.subscribe('chat message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebSocketController.prototype, "handleChatMessage", null);
__decorate([
    websocket_decorator_1.ws.subscribe(/.+/),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebSocketController.prototype, "logMessage", null);
__decorate([
    websocket_decorator_1.ws.disconnect(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebSocketController.prototype, "disconnect", null);
WebSocketController = __decorate([
    websocket_decorator_1.ws('/chats'),
    __param(0, websocket_decorator_1.ws.socket()),
    __metadata("design:paramtypes", [Object])
], WebSocketController);
exports.WebSocketController = WebSocketController;
//# sourceMappingURL=websocket.controller.js.map