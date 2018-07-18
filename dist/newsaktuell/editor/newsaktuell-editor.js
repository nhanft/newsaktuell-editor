var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "draft-js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require("react");
    var draft_js_1 = require("draft-js");
    var NewsaktuellEditor = /** @class */ (function (_super) {
        __extends(NewsaktuellEditor, _super);
        function NewsaktuellEditor(props) {
            var _this = _super.call(this, props) || this;
            _this.state = { editorState: draft_js_1.EditorState.createEmpty() };
            return _this;
        }
        NewsaktuellEditor.prototype.render = function () {
            return (React.createElement(draft_js_1.Editor, { editorState: this.editorState(), onChange: this.handleInput }));
        };
        NewsaktuellEditor.prototype.editorState = function () {
            return this.state.editorState;
        };
        NewsaktuellEditor.prototype.handleInput = function (editorState) {
            console.log("Hello ", editorState.getCurrentContent().getPlainText());
        };
        return NewsaktuellEditor;
    }(React.Component));
    exports.NewsaktuellEditor = NewsaktuellEditor;
});
//# sourceMappingURL=newsaktuell-editor.js.map