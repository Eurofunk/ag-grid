// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { DraggingEvent } from "../dragAndDrop/dragAndDropService";
export declare class MoveColumnController {
    private loggerFactory;
    private columnController;
    private gridPanel;
    private dragAndDropService;
    private gridOptionsWrapper;
    private needToMoveLeft;
    private needToMoveRight;
    private movingIntervalId;
    private intervalCount;
    private logger;
    private pinned;
    private centerContainer;
    private lastDraggingEvent;
    private failedMoveAttempts;
    constructor(pinned: string);
    init(): void;
    onDragEnter(draggingEvent: DraggingEvent): void;
    onDragLeave(draggingEvent: DraggingEvent): void;
    onDragStop(): void;
    private adjustXForScroll(draggingEvent);
    private workOutNewIndex(displayedColumns, allColumns, dragColumn, direction, xAdjustedForScroll);
    private checkCenterForScrolling(xAdjustedForScroll);
    onDragging(draggingEvent: DraggingEvent, fromEnter?: boolean): void;
    private attemptMoveColumns(allMovingColumns, dragDirection, xAdjustedForScroll, fromEnter);
    private getNewIndexForColMovingLeft(displayedColumns, allColumns, dragColumn, x);
    private getNewIndexForColMovingRight(displayedColumns, allColumns, dragColumnOrGroup, x);
    private ensureIntervalStarted();
    private ensureIntervalCleared();
    private moveInterval();
}
