// Type definitions for ag-grid v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "../entities/column";
export declare class HeaderRenderer {
    private gridOptionsWrapper;
    private columnController;
    private gridPanel;
    private context;
    private eventService;
    private pinnedLeftContainer;
    private pinnedRightContainer;
    private centerContainer;
    private eHeaderViewport;
    private eRoot;
    private eHeaderOverlay;
    private init();
    refreshHeader(): void;
    setPinnedColContainerWidth(): void;
    onIndividualColumnResized(column: Column): void;
}
