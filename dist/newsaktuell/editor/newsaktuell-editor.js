"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var draft_js_1 = require("draft-js");
var space_rule_1 = require("../transformation/space-rule");
var NewsaktuellEditor = /** @class */ (function (_super) {
    __extends(NewsaktuellEditor, _super);
    function NewsaktuellEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.transformation = new space_rule_1.default();
        _this.transform = function () {
            return alert(_this.transformation.transform(_this.editorState().getCurrentContent().getPlainText()));
        };
        _this.editorState = function () {
            return _this.state.editorState;
        };
        _this.handleInput = function (editorState) {
            _this.setState({ editorState: editorState });
        };
        _this.state = { editorState: draft_js_1.EditorState.createEmpty() };
        return _this;
    }
    NewsaktuellEditor.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(draft_js_1.Editor, { editorState: this.editorState(), onChange: this.handleInput }),
            React.createElement("button", { onClick: this.transform }, "Speichern")));
    };
    return NewsaktuellEditor;
}(React.Component));
exports.default = NewsaktuellEditor;
//# sourceMappingURL=newsaktuell-editor.js.map