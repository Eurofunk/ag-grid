// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/** need to get this class to use the dragService, so no duplication */
export interface DragServiceParams {
    eDraggableElement: Element;
    eBody: HTMLElement;
    cursor: string;
    startAfterPixels: number;
    onDragStart: (event?: MouseEvent) => void;
    onDragging: (delta: number, finished: boolean) => void;
}
export declare class HorizontalDragService {
    addDragHandling(params: DragServiceParams): void;
}
