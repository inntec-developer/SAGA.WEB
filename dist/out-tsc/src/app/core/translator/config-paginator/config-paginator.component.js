"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var dutchRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
        return "0 van " + length;
    }
    length = Math.max(length, 0);
    var startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    var endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return startIndex + 1 + " - " + endIndex + " de " + length;
};
function getSpanishPaginatorIntl() {
    var paginatorIntl = new material_1.MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'Filas:';
    paginatorIntl.nextPageLabel = 'Página siguiente';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.firstPageLabel = 'Primera página';
    paginatorIntl.lastPageLabel = 'Ultima página';
    paginatorIntl.getRangeLabel = dutchRangeLabel;
    return paginatorIntl;
}
exports.getSpanishPaginatorIntl = getSpanishPaginatorIntl;
//# sourceMappingURL=config-paginator.component.js.map