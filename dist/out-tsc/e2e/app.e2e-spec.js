"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('ng2angle App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Ng2anglePage();
    });
    it('should display Angle in h1 tag', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Angle');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map