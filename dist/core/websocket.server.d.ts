import { Constructor, Context } from '@loopback/context';
import { HttpServer } from '@loopback/http-server';
import { Server, ServerOptions, Socket } from 'socket.io';
import SocketIOServer = require('socket.io');
export declare type SockIOMiddleware = (socket: Socket, fn: (err?: any) => void) => void;
/**
 * A websocket server
 */
export declare class WebSocketServer extends Context {
    readonly httpServer: HttpServer;
    private options;
    private io;
    constructor(httpServer: HttpServer, options?: ServerOptions);
    /**
     * Register a sock.io middleware function
     * @param fn
     */
    use(fn: SockIOMiddleware): SocketIOServer.Namespace;
    /**
     * Register a websocket controller
     * @param ControllerClass
     * @param namespace
     */
    route(ControllerClass: Constructor<any>, namespace?: string | RegExp): Server | SocketIOServer.Namespace;
    /**
     * Start the websocket server
     */
    start(): Promise<void>;
    /**
     * Stop the websocket server
     */
    stop(): Promise<void>;
}
