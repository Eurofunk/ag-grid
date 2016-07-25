// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { ColumnChangeEvent } from "./columnChangeEvent";
import { Column } from "./entities/column";
export declare class MasterSlaveService {
    private gridOptionsWrapper;
    private columnController;
    private gridPanel;
    private eventService;
    private logger;
    private consuming;
    private setBeans(loggerFactory);
    init(): void;
    private fireEvent(callback);
    private onEvent(callback);
    private fireColumnEvent(event);
    fireHorizontalScrollEvent(horizontalScroll: number): void;
    onScrollEvent(horizontalScroll: number): void;
    getMasterColumns(event: ColumnChangeEvent): Column[];
    getColumnIds(event: ColumnChangeEvent): string[];
    onColumnEvent(event: ColumnChangeEvent): void;
}
