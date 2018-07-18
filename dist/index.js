(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./newsaktuell/editor/newsaktuell-editor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var newsaktuell_editor_1 = require("./newsaktuell/editor/newsaktuell-editor");
    exports.NewsaktuellEditor = newsaktuell_editor_1.NewsaktuellEditor;
});
//# sourceMappingURL=index.js.map