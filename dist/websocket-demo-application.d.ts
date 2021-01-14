import { Application, ApplicationConfig } from '@loopback/core';
import { HttpServer } from '@loopback/http-server';
import { WebSocketServer } from "./core";
export declare class WebSocketDemoApplication extends Application {
    readonly httpServer: HttpServer;
    readonly wsServer: WebSocketServer;
    constructor(options?: ApplicationConfig);
    start(): Promise<void>;
    stop(): Promise<void>;
}
