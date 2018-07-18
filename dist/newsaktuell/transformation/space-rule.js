(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpaceRule = /** @class */ (function () {
        function SpaceRule() {
        }
        SpaceRule.prototype.transform = function (html) {
            return html.toLowerCase();
        };
        return SpaceRule;
    }());
    exports.SpaceRule = SpaceRule;
});
//# sourceMappingURL=space-rule.js.map