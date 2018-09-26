ace.define("ace/theme/origami",[], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-origami";
exports.cssText = ".ace-origami .ace_gutter {\
background: #bdbdbd;\
color: #222222\
}\
.ace-origami .ace_print-margin {\
width: 1px;\
background: #ffffff\
}\
.ace-origami {\
background-color: #ffffff;\
color: #222222\
}\
.ace-origami .ace_cursor {\
color: #222222\
}\
.ace-origami .ace_marker-layer .ace_selection {\
background: #6699CC\
}\
.ace-origami.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #eeeeee;\
}\
.ace-origami .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-origami .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #404040\
}\
.ace-origami .ace_marker-layer .ace_active-line {\
background: #eeeeee\
}\
.ace-origami .ace_gutter-active-line {\
background-color: #333333\
}\
.ace-origami .ace_marker-layer .ace_selected-word {\
border: 1px solid #6699CC\
}\
.ace-origami .ace_invisible {\
color: #404040\
}\
.ace-origami .ace_keyword,\
.ace-origami .ace_meta {\
color: #FF6600\
}\
.ace-origami .ace_constant,\
.ace-origami .ace_constant.ace_character,\
.ace-origami .ace_constant.ace_character.ace_escape,\
.ace-origami .ace_constant.ace_other {\
color: #339999\
}\
.ace-origami .ace_constant.ace_numeric {\
color: #99CC99\
}\
.ace-origami .ace_invalid,\
.ace-origami .ace_invalid.ace_deprecated {\
color: #CCFF33;\
background-color: #000000\
}\
.ace-origami .ace_fold {\
background-color: #FFCC00;\
border-color: #FFFFFF\
}\
.ace-origami .ace_entity.ace_name.ace_function,\
.ace-origami .ace_support.ace_function,\
.ace-origami .ace_variable {\
color: #FFCC00\
}\
.ace-origami .ace_variable.ace_parameter {\
font-style: italic\
}\
.ace-origami .ace_string {\
color: #66FF00\
}\
.ace-origami .ace_string.ace_regexp {\
color: #44B4CC\
}\
.ace-origami .ace_comment {\
color: #9933CC\
}\
.ace-origami .ace_entity.ace_other.ace_attribute-name {\
font-style: italic;\
color: #99CC99\
}\
.ace-origami .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
                (function() {
                    ace.require(["ace/theme/vibrant_ink"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            