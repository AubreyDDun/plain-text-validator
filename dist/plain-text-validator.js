"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_aware_1 = __importDefault(require("emoji-aware"));
function plainTextValidator(str) {
    if (emoji_aware_1.default.onlyEmoji(str).length > 0)
        return false;
    var regHalfWidth = /[#*@\-_~%&\\/[\]{}()=+¥$£,:;?!`|]/i;
    var regFullWidth = /[，。？！…：、“”‘’"'（）—；·•《》【】「」『』｛｝［］〔〕〈〉<>−×÷^€°.｜￥＄￡＋－／＼＝°＊＃＠％＆＿]/i;
    // 符号太多，列举较为常见
    var regSymbol = /[♪ᴥ★☆≛⋆⍟⍣✡✦✧✪✫✬✯✰✵✶✷✸✹❂⭑⭒∇▽♡←↑→↓↔↕↨▲▼►◄⬆⬇⬅]/i;
    if (regHalfWidth.test(str) || regFullWidth.test(str) || regSymbol.test(str))
        return false;
    return true;
}
exports.default = plainTextValidator;
