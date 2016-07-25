/**
 * ag-grid - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v4.2.5-4c89157dfe91c1f392e9a8bdf09c9c12cbc95ef5-ef
 * @link http://www.ag-grid.com/
 * @license MIT
 */
var utils_1 = require('./utils');
function defaultGroupComparator(valueA, valueB, nodeA, nodeB) {
    var nodeAIsGroup = utils_1.Utils.exists(nodeA) && nodeA.group;
    var nodeBIsGroup = utils_1.Utils.exists(nodeB) && nodeB.group;
    var bothAreGroups = nodeAIsGroup && nodeBIsGroup;
    var bothAreNormal = !nodeAIsGroup && !nodeBIsGroup;
    if (bothAreGroups) {
        return utils_1.Utils.defaultComparator(nodeA.key, nodeB.key);
    }
    else if (bothAreNormal) {
        return utils_1.Utils.defaultComparator(valueA, valueB);
    }
    else if (nodeAIsGroup) {
        return 1;
    }
    else {
        return -1;
    }
}
exports.defaultGroupComparator = defaultGroupComparator;
