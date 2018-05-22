"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Ng2anglePage = (function () {
    function Ng2anglePage() {
    }
    Ng2anglePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Ng2anglePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Ng2anglePage;
}());
exports.Ng2anglePage = Ng2anglePage;
//# sourceMappingURL=app.po.js.map