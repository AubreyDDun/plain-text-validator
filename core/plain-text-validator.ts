import emojiAware from 'emoji-aware'

export default function plainTextValidator (str: string): boolean {
  if (emojiAware.onlyEmoji(str).length > 0) return false

  const regHalfWidth = /[#*@\-_~%&\\/[\]{}()=+¥$£,:;?!`|]/i
  const regFullWidth = /[，。？！…：、“”‘’"'（）—；·•《》【】「」『』｛｝［］〔〕〈〉<>−×÷^€°.｜￥＄￡＋－／＼＝°＊＃＠％＆＿]/i
  // 符号太多，列举较为常见
  const regSymbol = /[♪ᴥ★☆≛⋆⍟⍣✡✦✧✪✫✬✯✰✵✶✷✸✹❂⭑⭒∇▽♡←↑→↓↔↕↨▲▼►◄⬆⬇⬅]/i

  if (regHalfWidth.test(str) || regFullWidth.test(str) || regSymbol.test(str)) return false

  return true
}