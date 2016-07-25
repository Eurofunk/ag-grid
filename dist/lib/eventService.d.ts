// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { LoggerFactory } from "./logger";
import { IEventEmitter } from "./interfaces/iEventEmitter";
export declare class EventService implements IEventEmitter {
    private allListeners;
    private globalListeners;
    private logger;
    private static PRIORITY;
    agWire(loggerFactory: LoggerFactory, globalEventListener?: Function): void;
    private getListenerList(eventType);
    addEventListener(eventType: string, listener: Function): void;
    addModalPriorityEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(eventType: string, event?: any): void;
}
