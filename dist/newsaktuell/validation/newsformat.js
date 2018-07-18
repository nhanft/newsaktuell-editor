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
    var Newsformat = /** @class */ (function () {
        function Newsformat(html) {
            this.html = html;
        }
        Newsformat.prototype.isValid = function () {
            return false;
        };
        return Newsformat;
    }());
    exports.Newsformat = Newsformat;
});
//# sourceMappingURL=newsformat.js.map